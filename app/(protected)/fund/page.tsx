"use client";

import { loan_statuses, loan_types } from "@/enums";
import { ChangeEvent, useEffect, useState } from "react";

const FundALoan = () => {
  const [loan_type, set_loan_type] = useState<string>(loan_types.OFR);
  const [pcp, set_pcp] = useState<number>(1500); // priciple amount
  const [term, set_term] = useState<number>(0);
  const [due_from, set_due_from] = useState<Date>();
  const [due_by, set_due_by] = useState<Date>();
  const [rate, set_rate] = useState<number>(4);
  const [due, set_due] = useState<number>(0); // total owed
  const [description, set_description] = useState<string>();
  const [status, set_status] = useState<string>(loan_statuses.PND);
  const [instalment, set_instalment] = useState<number>(0);

  // adjust total debt in real time
  useEffect(() => {
    const calculate_due = () => {
      // total debt
      const due_amount = pcp + Math.floor(pcp * (rate / 100) * term);
      set_due(due_amount);

      // instalments
      const instmnt = Math.floor(due_amount / term);
      set_instalment(instmnt);
    };

    calculate_due();
  }, [pcp, rate, term]);

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center space-y-5">
      {/* pcp */}
      <div className=" flex flex-col gap-2 items-center">
        <label htmlFor="pcp">Principle</label>
        <input
          name="pcp"
          className=" border-2 border-black"
          type="number"
          min={0}
          max={50000}
          step={1500}
          defaultValue={1500}
          value={pcp}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_pcp(e.target.valueAsNumber)
          }
        />
      </div>

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
        <label htmlFor="term">You would</label>
        <div>{due}</div>
      </div>
    </div>
  );
};

export default FundALoan;
