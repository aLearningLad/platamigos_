"use client";

import { loan_statuses, loan_types } from "@/enums";
import { createClient } from "@/utils/supabase/client";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const FundSpecificPage = () => {
  const { id } = useParams();
  const [this_loan, set_this_loan] = useState<Tcommunity_requests>();
  const [is_funding, set_is_funding] = useState<boolean>(false);
  const [term, set_term] = useState<number>(5);
  const [due_from, set_due_from] = useState<string>();
  const [due_by, set_due_by] = useState<string>();
  const [rate, set_rate] = useState<number>(4);
  const [due, set_due] = useState<number>(0); // total owed
  const [description, set_description] = useState<string>();
  const [instalment, set_instalment] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const fetchSingleLoan = async () => {
      const supabase = createClient();
      const { data: single_loan_data, error: single_loan_data_error } =
        await supabase.from("loans").select("*").eq("loan_id", id);

      if (single_loan_data && single_loan_data.length > 0) {
        const loan = single_loan_data[0];
        set_this_loan(loan);
      }
    };

    fetchSingleLoan();
  }, []);

  // adjust total debt in real time
  useEffect(() => {
    const calculate_due = () => {
      // total debt
      const due_amount =
        this_loan?.pcp! + Math.floor(this_loan?.pcp! * (rate / 100) * term);
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
    try {
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;

      // add to loans table
      const { error: funding_offer_error } = await supabase
        .from("loan")
        .insert({
          user_id,
          type: loan_types.OFR,
          pcp: this_loan?.pcp,
          due: due_by,
          term,
          due_from,
          rate,
          description,
          status: loan_statuses.PND,
        });

      // catch error

      // record in transactions_log

      // catch error

      router.push("/dash");
    } catch (error) {
      console.log("Unable to submit funding offer: ", error);
    }
  };

  {
    return is_funding ? (
      <div className=" w-full min-h-screen flex justify-center items-center flex-col gap-5 ">
        {/* rate */}
        <div className=" flex flex-col gap-2 items-center">
          <label htmlFor="rate">Interest {"%"}</label>
          <input
            name="rate"
            className=" border-2 border-black"
            type="number"
            min={0}
            max={30}
            step={2}
            defaultValue={12}
            value={rate}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              set_rate(e.target.valueAsNumber)
            }
          />
        </div>

        {/* term */}
        <div className=" flex flex-col gap-2 items-center">
          <label htmlFor="term">Term</label>
          <input
            name="term"
            className=" border-2 border-black"
            type="number"
            min={1}
            max={18}
            step={1}
            defaultValue={6}
            value={term}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              set_term(e.target.valueAsNumber)
            }
          />
        </div>

        {/* due */}
        <div className=" flex flex-col gap-2 items-center">
          <label htmlFor="term">Due</label>
          <div>{due}</div>
        </div>

        {/* instalment */}
        <div className=" flex flex-col gap-2 items-center">
          <label htmlFor="term">
            You would recieve <b>R{instalment}</b> per month, for {term} months
          </label>
        </div>

        {/* start paying from */}
        <div className=" w-full flex flex-col items-center justify-center ">
          <label htmlFor="due_from">Due from</label>
          <input
            type="date"
            value={due_from}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              set_due_from(e.target.value)
            }
            name="due_from"
            id="due_from"
          />
        </div>
      </div>
    ) : (
      <div className=" w-full min-h-screen justify-center items-center flex flex-col">
        <p>This debtor is asking for R{this_loan?.pcp} </p>
        <div className=" w-full flex flex-col items-center justify-center space-y-5 "></div>
        <p>{this_loan?.title}</p>
        <p>{this_loan?.description}</p>
        <button
          onClick={handleIsFunding}
          className=" bg-cyan-600 mt-4 text-white w-fit px-7 h-8 rounded-[6px]"
        >
          Fund This
        </button>
      </div>
    );
  }
};

export default FundSpecificPage;
