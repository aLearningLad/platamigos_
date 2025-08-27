"use client";

import React from "react";
import { MdArrowUpward } from "react-icons/md";
import dataViz from "@/public/assets/datavizLottie.json";
import Lottie from "lottie-react";

const S1BOTTOM = () => {
  return (
    <div className=" w-full h-1/2 border-2 border-white gap-2 p-1 flex flex-row lg:p-3  ">
      {/* left side */}
      <div className=" h-full flex-1/2 bg-white flex flex-row rounded-lg items-center p-2 lg:p-3 justify-center ">
        <Lottie className=" w-32 h-32 " animationData={dataViz} loop autoplay />
        <div className=" w-[70%] h-full border-2 border-black flex flex-row ">
          <div className=" w-1/2 flex h-full flex-col items-start justify-around ">
            <div className=" w-full h-1/2 p-1 ">
              <p className=" text-[14px] font-bold text-orange-600 ">83%</p>
              <p className=" text-[10px] text-neutral-700/70 font-bold ">
                Funding close rate
              </p>
            </div>
            <div className=" w-full h-1/2 p-1 ">
              <p className=" text-[14px] font-bold text-teal-400 ">1:3</p>
              <p className=" text-[10px] text-neutral-700/70 font-bold ">
                Creditor-to-debtor ratio
              </p>
            </div>
          </div>

          <div className="w-1/2 flex h-full flex-col items-start justify-around ">
            <div className=" w-full h-1/2 flex justify-start items-center text-teal-400  text-[7px] font-bold ">
              <MdArrowUpward size={12} /> 65% avg daily change
            </div>
            <div className=" w-full h-1/2 flex justify-start items-center text-orange-600 text-[7px] font-bold ">
              {">>>"} 85% settlements
            </div>
          </div>
        </div>
      </div>

      {/* middle  */}
      <div className=" h-full flex-1/4 bg-white rounded-lg flex flex-col items-center justify-center p-2 lg:p-3 ">
        <div className=" w-fit h-fit border-4 border-cyan-300 rounded-full "></div>
        <p className=" text-[14px] font-bold ">30%</p>
        <p className=" text-[10px] text-neutral-400 font-semibold ">
          Maximum interest rate
        </p>
      </div>

      {/* right side */}
      <div className=" h-full flex-1/4 bg-white rounded-lg p-2 lg:p-3 justify-center flex-col items-center flex">
        <p className=" text-[8px] font-bold ">Flexible terms</p>
        <div className=" flex flex-col items-center justify-center ">
          <p className=" text-[14px] font-bold ">24</p>
          <p className=" text-[8px] text-neutral-600/70 ">Months to pay</p>
        </div>
        <p className=" text-[8px] text-teal-400 font-bold ">
          {" "}
          {">>>"} Or single sums{" "}
        </p>
      </div>
    </div>
  );
};

export default S1BOTTOM;
