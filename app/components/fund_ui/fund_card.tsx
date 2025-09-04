import { I_fund_card } from "@/models/interfaces";
import { months_arr } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

const FundCard: React.FC<I_fund_card> = ({
  alias,
  created_at,
  description,
  loan_id,
  pcp,
  title,
  user_id,
  index,
}) => {
  return (
    <div
      key={loan_id}
      className={`min-w-[20vw] max-w-[20vw] ${
        index % 2 === 0 ? "bg-purple-700 text-white" : "bg-slate-500/10"
      } min-h-[35vh] rounded-lg flex flex-col p-3 items-start justify-around m-2 `}
    >
      <p className=" text-[10px]">{new Date(created_at).getDate()}</p>
      <p className=" text-[16px] font-semibold">
        {months_arr[new Date(created_at).getMonth()]}
      </p>
      <div className=" text-[10px] font-semibold w-full min-h-[16vh] justify-center text-start items-center ">
        {description}
      </div>
      <div className=" w-full flex justify-between ">
        <span className=" w-full flex gap-1 justify-start items-center">
          <div className=" w-fit h-fit rounded-full p-1 bg-black ">
            <FaUser size={6} className="text-white" />
          </div>
          <p className=" text-[8px]">{alias}</p>
        </span>
        <Link
          href={`/fund_specific/${loan_id}`}
          className=" bg-cyan-600/30 hover:bg-green-500 transition duration-200 ease-in-out rounded-[5px] flex justify-center items-center lg:h-[4vh] px-5"
        >
          <p className=" text-[10px] text-white ">Fund</p>
        </Link>
      </div>
    </div>
  );
};

export default FundCard;
