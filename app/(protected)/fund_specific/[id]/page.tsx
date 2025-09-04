"use client";

import Fetching from "@/app/components/fund_specific_ui/fetching";
import Funding from "@/app/components/fund_specific_ui/funding";
import FundingLoading from "@/app/components/fund_specific_ui/funding_loading";
import Snapshot from "@/app/components/fund_specific_ui/snapshot";
import { action_types, loan_statuses, loan_types } from "@/enums";
import { Tcommunity_requests } from "@/models/types";
import { createClient } from "@/utils/supabase/client";
import { useParams, useRouter } from "next/navigation";
import { title } from "process";
import { useEffect, useState } from "react";

const FundSpecificPage = () => {
  const { id } = useParams();
  const [this_loan, set_this_loan] = useState<Tcommunity_requests>();
  const [is_funding, set_is_funding] = useState<boolean>(false);
  const [term, set_term] = useState<number>(5);
  const [due_from, set_due_from] = useState<string>(String(new Date()));
  const [due_by, set_due_by] = useState<string>(String(new Date()));
  const [rate, set_rate] = useState<number>(4);
  const [due, set_due] = useState<number>(0); // total owed
  const [description, set_description] = useState<string>("");
  const [instalment, set_instalment] = useState<number>(0);
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [alias, set_alias] = useState<string>("");
  const [is_fetching_loan, set_is_fetching_loan] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const fetchSingleLoan = async () => {
      set_is_fetching_loan(true);
      const supabase = createClient();
      const { data: single_loan_data, error: single_loan_data_error } =
        await supabase.from("loans").select("*").eq("loan_id", id);

      if (single_loan_data && single_loan_data.length > 0) {
        const loan = single_loan_data[0];
        set_this_loan(loan);
        set_is_fetching_loan(false);
      }
    };

    const fetchAlias = async () => {
      try {
        const supabase = createClient();
        const user_id = (await supabase.auth.getUser()).data.user?.id;
        const { data: alias_data, error: alias_data_error } = await supabase
          .from("all_users")
          .select("alias")
          .eq("user_id", user_id);

        if (alias_data_error) throw new Error(alias_data_error.message);
        set_alias(alias_data[0].alias);
      } catch (error) {
        alert("Unable to fetch alias");
        console.log("Unable to fetch alias: ", error);
      }
    };

    fetchAlias();
    fetchSingleLoan();
  }, []);

  // adjust total debt in real time
  useEffect(() => {
    const calculate_due = () => {
      // total debt
      const due_amount =
        this_loan?.pcp! +
        Math.floor((this_loan?.pcp! * (rate / 100) * term) / 12);
      set_due(due_amount);

      // instalments
      const instmnt = Math.floor(due_amount / term);
      set_instalment(instmnt);
    };

    calculate_due();
  }, [this_loan?.pcp, rate, term]);

  const handleIsFunding = () => {
    set_is_funding((prev) => !prev);
  };

  const handleOfferToFund = async () => {
    set_is_loading(true);
    try {
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;

      // add to loans table
      const { error: funding_offer_error } = await supabase
        .from("loans")
        .insert({
          user_id,
          type: loan_types.OFR,
          pcp: this_loan?.pcp,
          debtor_id: this_loan?.user_id,
          due,
          term,
          due_by,
          due_from: due_from,
          rate,
          description: this_loan?.description,
          title: this_loan?.title,
          status: loan_statuses.PND,
          alias: alias,
          creditor_id: user_id,
        });

      // catch error
      if (funding_offer_error) throw new Error(funding_offer_error.details);

      // record in transactions_log
      const { error: transactions_log_error } = await supabase
        .from("transactions_log")
        .insert({
          creditor_id: user_id,
          debtor_id: this_loan?.user_id,
          amount: due,
          action_type: action_types.OFR,
          details: `User with ID-${user_id} made an offer to fund a loan with ID-${id} by debtor with ID-${this_loan?.user_id}`,
        });

      // catch error
      if (transactions_log_error)
        throw new Error(transactions_log_error.message);

      alert("Funding offer submitted");
      router.push("/dash");
    } catch (error) {
      console.log("Unable to submit funding offer: ", error);
      set_is_loading(false);
      alert("Something went wrong!");
    }
  };

  {
    return is_fetching_loan ? (
      <Fetching />
    ) : is_funding ? (
      is_loading ? (
        <FundingLoading />
      ) : (
        <Funding
          due={due}
          due_by={due_by || ""}
          due_from={due_from ?? ""}
          handleOfferToFund={handleOfferToFund}
          instalment={instalment}
          pcp={this_loan?.pcp ?? 0}
          rate={rate}
          set_due_by={set_due_by}
          set_due_from={set_due_from}
          set_is_funding={set_is_funding}
          set_rate={set_rate}
          set_term={set_term}
          term={term}
          key={this_loan?.loan_id}
        />
      )
    ) : (
      <Snapshot
        description={
          this_loan?.description ?? "Debtor didn't provide further details"
        }
        handleIsFunding={handleIsFunding}
        pcp={this_loan?.pcp ?? 0}
        title={title}
        key={this_loan?.loan_id}
      />
    );
  }

  {
  }
};

export default FundSpecificPage;
