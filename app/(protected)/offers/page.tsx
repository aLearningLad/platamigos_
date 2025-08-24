"use client";

import { action_types, loan_statuses, loan_types } from "@/enums";
import { handleCreditScore } from "@/utils/misc_functions";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OffersPage = () => {
  const [offers, set_offers] = useState<Toffers[]>([]);
  const [is_loading, set_is_loading] = useState(false);
  const [prev_score, set_prev_score] = useState<number>(0);
  const [prev_balance, set_prev_balance] = useState<number>(2000);
  const [prev_loans_funded, set_prev_loans_funded] = useState<number>(0);
  const [prev_total_debt, set_prev_total_debt] = useState<number>(0);
  const [debts_settled, set_debts_settled] = useState<number>(0);
  const router = useRouter();

  const handleAccept = async (
    loan_id: string,
    creditor_id: string,
    pcp: number,
    due: number
  ) => {
    try {
      set_is_loading(true);
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;

      const updated_score = handleCreditScore(
        prev_score,
        pcp,
        debts_settled,
        prev_balance,
        prev_total_debt
      );

      // loans table
      const { error: accept_funding_error } = await supabase
        .from("loans")
        .update({
          status: loan_statuses.FND,
        })
        .eq("loan_id", loan_id);

      // throw error
      if (accept_funding_error) throw new Error(accept_funding_error.message);

      // transactions log
      const { data: transactions_log_error } = await supabase
        .from("transactions_log")
        .insert({
          debtor_id: user_id,
          creditor_id,
          amount: pcp,
          details: `User with ID-${creditor_id} provided funding to user with ID-${user_id}`,
          action_type: action_types.FND,
        });

      // throw error
      if (transactions_log_error) throw new Error(transactions_log_error);

      // credit scores table
      const { error: credit_scores_error } = await supabase
        .from("credit_scores")
        .update({
          score: updated_score, // work on the algo for this
          balance: prev_balance + pcp,
          loans_funded: prev_loans_funded + 1,
          total_creditors: prev_total_debt + due,
        })
        .eq("user_id", user_id);

      if (credit_scores_error) throw new Error(credit_scores_error.message);

      set_is_loading(false);
      router.refresh();
    } catch (error) {
      console.log("Something went wrong: ", error);
      set_is_loading(false);
      alert("Unable to accept loan funding. Please try again");
      router.refresh();
    }
  };

  const handleDecline = async (
    loan_id: string,
    creditor_id: string,
    pcp: number,
    due: number
  ) => {
    try {
      set_is_loading(true);
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;

      // loans table
      const { error: accept_funding_error } = await supabase
        .from("loans")
        .update({
          status: loan_statuses.DEN,
        })
        .eq("loan_id", loan_id);

      // throw error
      if (accept_funding_error) throw new Error(accept_funding_error.message);

      // transactions log
      const { data: transactions_log_error } = await supabase
        .from("transactions_log")
        .insert({
          debtor_id: user_id,
          creditor_id,
          amount: pcp,
          details: `User with ID-${creditor_id}'s funding offer denied by user with ID-${user_id}`,
          action_type: action_types.FND,
        });

      // throw error
      if (transactions_log_error) throw new Error(transactions_log_error);

      set_is_loading(false);
      router.refresh();
    } catch (error) {
      console.log("Something went wrong: ", error);
      set_is_loading(false);
      alert("Unable to decline loan funding. Please try again");
      router.refresh();
    }
  };

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        set_is_loading(true);
        const supabase = createClient();
        const user_id = (await supabase.auth.getUser()).data.user?.id;
        const { data: offer_data, error: offer_data_error } = await supabase
          .from("loans")
          .select("*")
          .eq("type", loan_types.OFR)
          .eq("debtor_id", user_id)
          .eq("status", loan_statuses.PND);

        if (offer_data_error) throw new Error(offer_data_error.message);

        set_offers(offer_data);
        set_is_loading(false);

        console.log("loan offers for this user are here: ", offer_data);
      } catch (error) {
        console.log("Unable to fetch loan offers for this user: ", error);
      }
    };

    const fetchCredit = async () => {
      try {
        const supabase = createClient();
        const user_id = (await supabase.auth.getUser()).data.user?.id;

        // get credit
        const { data: credit_data, error: credit_scores_error } = await supabase
          .from("credit_scores")
          .select("*")
          .eq("user_id", user_id);

        // throw error
        if (credit_scores_error) throw new Error(credit_scores_error.message);

        // set all the other state variables
        set_prev_score(credit_data[0]["score"]);
        set_prev_balance(credit_data[0]["balance"]);
        set_prev_total_debt(credit_data[0]["total_creditors"]);
        set_prev_loans_funded(credit_data[0]["loans_funded"]);
        set_debts_settled(credit_data[0]["debts_settled"]);
      } catch (error) {
        console.log("Unable to fetch credit details", error);
        alert("Unable to fetch credit details. Please try again");
      }
    };

    fetchCredit();
    fetchOffers();
  }, []);

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center">
        Just a minute...
      </div>
    ) : (
      <div className=" w-full min-h-screen flex flex-col items-center justify-center">
        {offers == undefined || offers.length < 1 ? (
          <div className=" w-full h-full flex justify-center items-center flex-col">
            You {"don't"} have any loan offers yet
            <Link
              className=" w-fit px-6 h-8 bg-cyan-500 text-white flex justify-center items-center text-[12px] rounded-[5px] "
              href={"/dash"}
            >
              Return to dash
            </Link>
          </div>
        ) : (
          <div className=" w-full h-full flex flex-col items-center justify-center">
            {offers.map((offer) => (
              <div className=" flex flex-col bg-neutral-400 rounded-lg items-center justify-center ">
                <p>{offer.title}</p>
                <p>{offer.description}</p>
                <p>{offer.pcp}</p>
                <p>{offer.due}</p>
                <div className=" flex flex-col items-center justify-center">
                  <button
                    className=" bg-green-500 text-white my-4 px-5 w-full py-3 rounded-lg text-[12px]"
                    onClick={() =>
                      handleAccept(
                        offer.loan_id,
                        offer.creditor_id,
                        offer.pcp,
                        offer.due
                      )
                    }
                  >
                    Accept Funding
                  </button>
                  <button
                    onClick={() =>
                      handleDecline(
                        offer.loan_id,
                        offer.creditor_id,
                        offer.pcp,
                        offer.due
                      )
                    }
                    className=" bg-red-500 text-white my-4 px-5 w-full py-3 rounded-lg text-[12px]"
                  >
                    Decline Funding
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default OffersPage;
