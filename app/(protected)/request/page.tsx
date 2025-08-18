"use client";

import { loan_statuses, loan_types } from "@/enums";
import { ChangeEvent, useState } from "react";

const RequestLoanPage = () => {
  const [loan_type, set_loan_type] = useState<string>(loan_types.RQT);
  const [pcp, set_pcp] = useState<number>(1500); // priciple amount
  const [due, set_due] = useState<number>(0); // total owed
  const [term, set_term] = useState<number>(0);
  const [due_from, set_due_from] = useState<Date>();
  const [due_by, set_due_by] = useState<Date>();
  const [rate, set_rate] = useState<number>();
  const [description, set_description] = useState<string>();
  const [status, set_status] = useState<string>(loan_statuses.PND);

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
    </div>
  );
};

export default RequestLoanPage;
