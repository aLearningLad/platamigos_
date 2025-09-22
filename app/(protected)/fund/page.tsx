"use client";

import FundCard from "@/app/components/fund_ui/fund_card";
import { loan_types } from "@/enums";
import { Tcommunity_requests } from "@/models/types";
import { dummies, months_arr } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdHome } from "react-icons/md";

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
    <div className=" py-2 lg:py-5 w-full min-h-screen flex flex-col items-center sm:px-2 md:px-5 lg:px-32 p-3 ">
      <h1 className=" text-2xl lg:text-xl font-semibold">Community Loans</h1>
      <p className=" text-lg lg:text-[12px] text-neutral-700 mb-5 text-center">
        Fund a loan, earn interest and help an amigo
      </p>

      <div className=" bg-neutral-400/10 flex overflow-auto flex-wrap justify-center items-center w-full h-[80vh] lg:h-[75vh] ">
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
      <Link
        className=" lg:hidden mt-5 rounded-[6px] flex w-full sm:w-10/12 md:w-8/12 bg-black justify-center items-center h-16 "
        href={"/dash"}
      >
        <MdHome size={30} color="white" />
      </Link>
    </div>
  );
};

export default FundALoan;
