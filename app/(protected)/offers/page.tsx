"use client";

import { action_types, loan_statuses, loan_types } from "@/enums";
import { Toffers } from "@/models/types";
import { handleCreditScore } from "@/utils/misc_functions";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import lottieLoader from "@/public/assets/lottieloading.json";
import Lottie from "lottie-react";
import OfferCard from "@/app/components/offer_ui/offer_card";
import { IoReturnUpBackOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const OffersPage = () => {
  const [offers, set_offers] = useState<Toffers[]>([]);
  const [is_loading, set_is_loading] = useState(false);
  const [prev_score, set_prev_score] = useState<number>(0);
  const [prev_balance, set_prev_balance] = useState<number>(2000);
  const [prev_loans_funded, set_prev_loans_funded] = useState<number>(0);
  const [prev_total_debt, set_prev_total_debt] = useState<number>(0);
  const [debts_settled, set_debts_settled] = useState<number>(0);
  const router = useRouter();
  const [is_refetching, set_is_refetching] = useState<boolean>(false);

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
      router.refresh();
      console.log("loan offers for this user are here: ", offer_data);
    } catch (error) {
      console.log("Unable to fetch loan offers for this user: ", error);
    }
  };

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

      toast.success("Loan offer accepted");
      await fetchOffers();
      set_is_loading(false);
      router.refresh();
    } catch (error) {
      console.log("Something went wrong: ", error);
      set_is_loading(false);
      toast.error("Unable to accept loan funding. Please try again");
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

      await fetchOffers();
      set_is_loading(false);
      router.refresh();
    } catch (error) {
      console.log("Something went wrong: ", error);
      set_is_loading(false);
      toast.error("Unable to decline loan funding. Please try again");
      router.refresh();
    }
  };

  useEffect(() => {
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
        toast.error("Unable to fetch credit details. Please try again");
      }
    };

    fetchCredit();
    fetchOffers();
  }, []);

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center text-center items-center flex-col gap-4 text-neutral-700 text-2xl lg:text-[16px] bg-gradient-to-tr from-pink-400/10 via-cyan-500/10 to-orange-600/10">
        Just a minute...
        <Lottie animationData={lottieLoader} className=" w-20 h-20" />
      </div>
    ) : (
      <div className=" w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-400/10 via-cyan-500/10 to-orange-600/10">
        {offers == undefined || offers.length < 1 ? (
          <div className=" w-full h-screen lg:h-full flex justify-center text-center items-center flex-col gap-5 p-3">
            <p className=" text-2xl lg:text-[14px]">
              You {"don't"} have any loan offers yet
            </p>
            <Link
              className=" w-full sm:w-8/12 md:w-6/12 lg:w-fit hover:bg-pink-600 hover:scale-95 transition-all duration-300 ease-in-out h-20 px-12 lg:h-12 bg-cyan-600 text-white flex justify-center items-center text-xl lg:text-[14px] rounded-[7px] "
              href={"/dash"}
            >
              Return to dash
            </Link>
          </div>
        ) : (
          <div className=" w-full px-1 sm:px-2 md:px-5 lg:px-28 xl:px-32 min-h-screen lg:h-full flex flex-col items-center justify-center ">
            <header className=" text-2xl lg:text-[18px] relative mb-4 lg:mb-3 w-full flex justify-center items-center">
              <Link
                href={"/dash"}
                className=" absolute left-2 text-black lg:hidden block"
              >
                <IoReturnUpBackOutline size={32} />
              </Link>
              Funding Offers
            </header>
            <p className=" text-lg lg:text-[14px] text-center mb-3">
              Compare funding offers from potential amigos. <br />
              Choose the best deal for you, or accept multiple offers where
              possible
            </p>
            <div className="bg-neutral-400/10 rounded-lg flex overflow-auto flex-wrap justify-center items-center w-full">
              {offers.map(
                (
                  {
                    alias,
                    created_at,
                    creditor_id,
                    description,
                    due,
                    due_by,
                    due_from,
                    loan_id,
                    pcp,
                    term,
                    title,
                  },
                  index
                ) => (
                  <OfferCard
                    alias={alias}
                    created_at={created_at}
                    creditor_id={creditor_id}
                    description={description}
                    due={due}
                    due_by={due_by}
                    due_from={due_from}
                    handleAccept={() =>
                      handleAccept(loan_id, creditor_id, pcp, due)
                    }
                    handleDecline={() =>
                      handleDecline(loan_id, creditor_id, pcp, due)
                    }
                    index={index}
                    loan_id={loan_id}
                    pcp={pcp}
                    term={term}
                    title={title}
                    key={loan_id}
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default OffersPage;
