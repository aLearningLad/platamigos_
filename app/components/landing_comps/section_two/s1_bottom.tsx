"use client";

import React from "react";
import { MdArrowUpward } from "react-icons/md";
import dataViz from "@/public/assets/datavizLottie.json";
import Lottie from "lottie-react";
import { I_s1_bottom } from "@/models/interfaces";

const S1BOTTOM: React.FC<I_s1_bottom> = ({ bdiv1Ref, bdiv2Ref, bdiv3Ref }) => {
  return (
    <div className=" w-full h-1/2 gap-2 p-1 flex flex-row lg:p-3  ">
      {/* left side */}
      <div
        ref={bdiv1Ref}
        className=" h-full flex-1/2 bg-white flex flex-row rounded-lg items-center p-2 lg:p-3 justify-center "
      >
        <Lottie className=" w-32 h-32 " animationData={dataViz} loop autoplay />
        <div className=" w-[70%] h-full flex flex-row ">
          <div className=" w-1/2 flex h-full flex-col items-start justify-around ">
            <div className=" w-full h-1/2 p-1 ">
              <p className=" text-[16px] font-bold text-orange-600 ">83%</p>
              <p className=" text-[12px] text-neutral-700/70 font-bold ">
                Funding close rate
              </p>
            </div>
            <div className=" w-full h-1/2 p-1 ">
              <p className=" text-[16px] font-bold text-teal-400 ">1:3</p>
              <p className=" text-[12px] text-neutral-700/70 font-bold ">
                Creditor-to-debtor ratio
              </p>
            </div>
          </div>

          <div className="w-1/2 flex h-full flex-col items-start justify-around ">
            <div className=" w-full h-1/2 flex justify-start items-center text-teal-400  text-[10px] font-bold ">
              <MdArrowUpward size={12} /> 65% avg daily change
            </div>
            <div className=" w-full h-1/2 flex justify-start items-center text-orange-600 text-[10px] font-bold ">
              {">>>"} 85% settlements
            </div>
          </div>
        </div>
      </div>

      {/* middle  */}
      <div
        ref={bdiv2Ref}
        className=" h-full flex-1/4 bg-white rounded-lg flex flex-col items-center justify-center p-2 lg:p-3 "
      >
        <div className=" w-fit h-fit border-4 border-cyan-300 rounded-full "></div>
        <p className=" text-20px] font-bold ">97%</p>
        <p className=" text-[14px] text-neutral-500 font-semibold ">
          Repayment rate
        </p>
      </div>

      {/* right side */}
      <div
        ref={bdiv3Ref}
        className=" h-full flex-1/4 bg-white rounded-lg p-2 lg:p-3 justify-center flex-col items-center flex"
      >
        <p className=" text-[12px] font-bold ">Offer Comparisons</p>
        <div className=" flex flex-col items-center justify-center ">
          <p className=" text-[18px] font-bold ">Choose</p>
          <p className=" text-[12px] text-neutral-600 ">
            Apply, get funded, spend
          </p>
        </div>
        <p className=" text-[12px] text-purple-600 font-semibold ">Or save</p>
      </div>
    </div>
  );
};

export default S1BOTTOM;
