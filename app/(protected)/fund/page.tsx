"use client";

import FundCard from "@/app/components/fund_ui/fund_card";
import { loan_types } from "@/enums";
import { Tcommunity_requests } from "@/models/types";
import { dummies, months_arr } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const FundALoan = () => {
  const [loan_type, set_loan_type] = useState<string>(loan_types.OFR);
  const [pcp, set_pcp] = useState<number>(1500); // priciple amount
  const [comm_loans, set_comm_loans] = useState<Tcommunity_requests[]>([]);
  const [is_loading, set_is_loading] = useState<boolean>(false);

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
    <div className=" py-2 lg:py-5 w-full min-h-screen flex flex-col items-center sm:px-2 md:px-5 lg:px-32 ">
      <h1 className=" text-xl font-semibold">Community Loans</h1>
      <p className=" text-[12px] text-neutral-500 mb-5">
        Fund a loan, earn interest and help an amigo
      </p>

      <div className=" bg-neutral-400/10 flex overflow-auto flex-wrap justify-center items-center w-full h-[75vh] ">
        {comm_loans.map(
          (
            { alias, created_at, description, loan_id, pcp, title, user_id },
            index
          ) => (
            <FundCard
              alias={alias}
              created_at={created_at}
              description={description}
              index={index}
              loan_id={loan_id}
              pcp={pcp}
              title={title}
              user_id={user_id}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FundALoan;
