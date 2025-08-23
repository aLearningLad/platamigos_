"use client";

import { action_types, loan_statuses } from "@/enums";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const OffersPage = () => {
  const [offers, set_offers] = useState<Toffers[]>([]);
  const [is_loading, set_is_loading] = useState(false);
  const [prev_score, set_prev_score] = useState<number>(0);
  const [prev_balance, set_prev_balance] = useState<number>(2000);
  const [prev_loans_funded, set_prev_loans_funded] = useState<number>(0);
  const [prev_total_debt, set_prev_total_debt] = useState<number>(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        set_is_loading(true);
        const supabase = createClient();
        const user_id = (await supabase.auth.getUser()).data.user?.id;
        const { data: offer_data, error: offer_data_error } = await supabase
          .from("loans")
          .select("*")
          .eq("type", "offer")
          .eq("debtor_id", user_id);

        if (offer_data_error) throw new Error(offer_data_error.message);

        set_offers(offer_data);
        set_is_loading(false);

        console.log("loan offers for this user are here: ", offer_data);
      } catch (error) {
        console.log("Unable to fetch loan offers for this user: ", error);
      }
    };

    fetchOffers();
  }, []);

  const handleAccept = async (
    loan_id: string,
    debtor_id: string,
    creditor_id: string,
    pcp: number,
    due: number
  ) => {
    try {
      const supabase = createClient();

      // loans table
      const { error: accept_funding_error } = await supabase
        .from("loans")
        .update({
          status: loan_statuses.FND,
        })
        .eq(loan_id, loan_id);

      // transactions log
      const { data: transactions_log_error } = await supabase
        .from("transactions_log")
        .insert({
          debtor_id,
          creditor_id,
          amount: pcp,
          details: `User with ID-${creditor_id} provided funding to user with ID-${debtor_id}`,
          action_type: action_types.FND,
        });
      // credit scores table
      const { error: credit_scores_error } = await supabase
        .from("credit_scores")
        .update({
          score: prev_score + 60, // work on the algo for this
          balance: prev_balance + pcp,
          loans_funded: prev_loans_funded + 1,
          total_creditors: prev_total_debt + due,
        })
        .eq("user_id", debtor_id);
    } catch (error) {}
  };

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center">
        Just a minute...
      </div>
    ) : (
      <div className=" w-full min-h-screen flex flex-col items-center justify-center">
        {offers == undefined ? (
          <div>Nothing to show here bruv</div>
        ) : (
          <div className=" w-full h-full flex flex-col items-center justify-center">
            {offers.map((offer) => (
              <div className=" flex flex-col bg-neutral-400 rounded-lg items-center justify-center ">
                <p>{offer.title}</p>
                <p>{offer.description}</p>
                <p>{offer.pcp}</p>
                <p>{offer.due}</p>
                <div className=" flex flex-col items-center justify-center">
                  <button onClick={handleAccept}>Accept Funding</button>
                  <button>Decline Funding</button>
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
