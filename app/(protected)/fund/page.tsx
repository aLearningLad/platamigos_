"use client";

import FundCard from "@/app/components/fund_ui/fund_card";
import { Tcommunity_requests } from "@/models/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import lottieLoader from "@/public/assets/lottierushing.json";
import Lottie from "lottie-react";

const FundALoan = () => {
  const [comm_loans, set_comm_loans] = useState<Tcommunity_requests[]>([]);
  const [is_loading, set_is_loading] = useState<boolean>(false);

  useEffect(() => {
    set_is_loading(true);
    const fetchComm = async () => {
      const res = await fetch("/api/community_loans");

      if (res.ok) {
        const data = await res.json();
        set_comm_loans(data.loans);
        set_is_loading(false);
      }
    };

    fetchComm();
  }, []);

  return (
    <div className=" py-2 lg:py-5 w-full min-h-screen flex flex-col items-center sm:px-2 md:px-5 lg:px-32 p-3 bg-gradient-to-br from-pink-400/10 via-cyan-500/10 to-orange-600/30">
      <h1 className=" text-2xl lg:text-xl font-semibold">Community Loans</h1>
      <p className=" text-lg lg:text-[12px] text-neutral-700 mb-5 text-center">
        Fund a loan, earn interest and help an amigo
      </p>

      {is_loading ? (
        <div className=" bg-neutral-400/10 flex text-center flex-col justify-center items-center w-full h-[80vh] lg:h-[75vh] ">
          <p className=" text-[14px]">Just a second . . .</p>

          <p className=" text-[12px]">
            {"We're"} fetching community request data
          </p>
          <Lottie animationData={lottieLoader} className=" w-32 h-32" />
        </div>
      ) : (
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
      )}
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
