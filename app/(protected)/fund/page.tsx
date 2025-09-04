"use client";

import { loan_types } from "@/enums";
import { dummies, months_arr } from "@/utils/utils";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const FundALoan = () => {
  const [loan_type, set_loan_type] = useState<string>(loan_types.OFR);
  const [pcp, set_pcp] = useState<number>(1500); // priciple amount
  const [comm_loans, set_comm_loans] = useState<any>([]);

  // adjust total debt in real time
  // useEffect(() => {
  //   const calculate_due = () => {
  //     // total debt
  //     const due_amount = pcp + Math.floor(pcp * (rate / 100) * term);
  //     set_due(due_amount);

  //     // instalments
  //     const instmnt = Math.floor(due_amount / term);
  //     set_instalment(instmnt);
  //   };

  //   calculate_due();
  // }, [pcp, rate, term]);

  useEffect(() => {
    const fetchComm = async () => {
      const res = await fetch("/api/community_loans");

      if (res.ok) {
        const data = await res.json();
        set_comm_loans(data.loans);
      }
    };

    fetchComm();
  }, []);

  return (
    // <div className=" w-full min-h-screen flex flex-col items-center justify-center space-y-5">
    //   {/* pcp */}
    //   <div className=" flex flex-col gap-2 items-center">
    //     <label htmlFor="pcp">Principle</label>
    //     <input
    //       name="pcp"
    //       className=" border-2 border-black"
    //       type="number"
    //       min={0}
    //       max={50000}
    //       step={1500}
    //       defaultValue={1500}
    //       value={pcp}
    //       onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //         set_pcp(e.target.valueAsNumber)
    //       }
    //     />
    //   </div>

    //   {/* rate */}
    //   <div className=" flex flex-col gap-2 items-center">
    //     <label htmlFor="rate">Interest {"%"}</label>
    //     <input
    //       name="rate"
    //       className=" border-2 border-black"
    //       type="number"
    //       min={0}
    //       max={30}
    //       step={2}
    //       defaultValue={12}
    //       value={rate}
    //       onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //         set_rate(e.target.valueAsNumber)
    //       }
    //     />
    //   </div>

    //   {/* term */}
    //   <div className=" flex flex-col gap-2 items-center">
    //     <label htmlFor="term">Term</label>
    //     <input
    //       name="term"
    //       className=" border-2 border-black"
    //       type="number"
    //       min={1}
    //       max={18}
    //       step={1}
    //       defaultValue={6}
    //       value={term}
    //       onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //         set_term(e.target.valueAsNumber)
    //       }
    //     />
    //   </div>

    //   {/* due */}
    //   <div className=" flex flex-col gap-2 items-center">
    //     <label htmlFor="term">Due</label>
    //     <div>{due}</div>
    //   </div>

    //   {/* instalment */}
    //   <div className=" flex flex-col gap-2 items-center">
    //     <label htmlFor="term">You would</label>
    //     <div>{due}</div>
    //   </div>
    // </div>

    <div className=" py-2 lg:py-5 w-full min-h-screen flex flex-col items-center sm:px-2 md:px-5 lg:px-32 ">
      <h1 className=" text-xl font-semibold">Community Loans</h1>
      <p className=" text-[12px] text-neutral-400">
        Fund a loan, earn interest and help an amigo
      </p>

      <div className=" border-4 border-black flex overflow-auto flex-wrap justify-center items-center w-full h-[80vh] ">
        {dummies.map((fundable, index) => (
          <div
            key={fundable.loan_id}
            className={`min-w-[20vw] max-w-[20vw] ${
              index % 2 === 0 ? "bg-purple-700 text-white" : "bg-neutral-500/20"
            } min-h-[35vh] rounded-lg flex flex-col p-3 items-start justify-around m-2 `}
          >
            <p className=" text-[10px]">
              {months_arr[fundable.created_at.getMonth()]}
            </p>
            <p className=" text-[16px]">{fundable.created_at.getDate()}</p>
            <div className=" text-[12px] w-full min-h-[16vh] flex justify-center text-start ">
              {fundable.description}
            </div>
            <span className=" w-full flex gap-1 justify-start items-center">
              <div className=" w-fit h-fit rounded-full p-1 bg-black ">
                <FaUser size={6} className="text-white" />
              </div>
              <p className=" text-[8px]">{fundable.alias}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundALoan;
