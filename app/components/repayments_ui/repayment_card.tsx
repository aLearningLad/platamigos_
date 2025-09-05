import { I_repayment_card } from "@/models/interfaces";
import React from "react";
import { FaUser } from "react-icons/fa";

const RepaymentCard: React.FC<I_repayment_card> = ({
  alias,
  description,
  due,
  loan_id,
  pcp,
  term,
  title,
  index,
}) => {
  return (
    <div
      key={loan_id}
      className={`min-w-[20vw] max-w-[20vw] ${
        index % 2 === 0 ? "bg-slate-950 text-white" : "bg-slate-500/20"
      } min-h-[55vh] rounded-lg flex flex-col p-3 items-center justify-around m-2 `}
    >
      {/* details */}
      <div className=" w-full min-h-[10vh] flex flex-col items-center text-center ">
        <p className="text-[12px] text-ellipsis ">{title}</p>
        <p className="text-[8px] text-ellipsis ">{description}</p>
      </div>

      <div className=" w-full h-[2px] bg-white rounded-lg " />

      {/* creditor */}
      <span className=" w-full flex justify-between items-center">
        <p className="text-[10px]">Funded by</p>
        <p className="text-[10px] flex gap-1">
          <FaUser size={10} />
          {alias}
        </p>
      </span>

      {/* pcp */}
      <span className=" w-full flex justify-between items-center">
        <p className="text-[10px]">Amount funded</p>
        <p className="text-[10px] flex gap-1">R{pcp}</p>
      </span>

      {/* owing */}
      <span className=" w-full flex justify-between items-center">
        <p className="text-[10px]">Remaining debt</p>
        <p className="text-2xl flex gap-1">R{due - pcp}</p>
      </span>

      <button className=" w-full hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer hover:bg-cyan-500 group h-8 rounded-[6px] bg-green-500 text-white text-[10px] flex justify-center items-center ">
        <p className=" flex group-hover:hidden">
          Pay R{Math.floor(due / term)}
        </p>
        <p className=" hidden group-hover:flex">Service this debt</p>
      </button>
    </div>
  );
};

export default RepaymentCard;
