"use client";

import Lottie from "lottie-react";
import interestAnimation from "@/public/assets/interestLottie.json";
import graphAnimation from "@/public/assets/graphLottie.json";
import { MdArrowUpward } from "react-icons/md";
import { I_s1_top } from "@/models/interfaces";

const S1TOP: React.FC<I_s1_top> = ({ div1Ref, div2Ref, div3Ref }) => {
  return (
    <div className=" w-full h-1/2 gap-2 p-1 flex flex-row lg:p-3 ">
      <div
        ref={div1Ref}
        className=" h-full flex-1/4 bg-white rounded-lg flex flex-col items-center justify-center p-2 lg:p-3 "
      >
        <div className=" w-fit h-fit border-4 border-cyan-300 rounded-full ">
          <Lottie animationData={interestAnimation} className=" w-14 h-14" />
        </div>
        <p className=" text-[14px] font-bold ">30%</p>
        <p className=" text-[10px] text-neutral-400 font-semibold ">
          Maximum interest rate
        </p>
      </div>
      <div
        ref={div2Ref}
        className=" h-full flex-1/2 bg-white flex flex-row rounded-lg items-center p-2 lg:p-3 justify-center "
      >
        <div className=" h-full w-[20%] flex flex-col items-end justify-end">
          <p className="text-[12px] font-bold ">R250,000</p>
          <p className="text-[8px] text-neutral-400 font-semibold ">
            Funding limit
          </p>
        </div>
        <Lottie
          animationData={graphAnimation}
          className=" w-48 h-12"
          loop
          autoplay
          style={{ width: 220, height: 220 }}
        />

        <div className=" h-full w-[25%] flex flex-row items-start justify-start ">
          <MdArrowUpward size={12} className=" text-teal-400 " />
          <p className=" text-[8px] text-teal-400 font-bold ">
            Increased liquidity
          </p>
        </div>
      </div>
      <div
        ref={div3Ref}
        className=" h-full flex-1/4 bg-white rounded-lg p-2 lg:p-3 justify-center flex-col items-center flex"
      >
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

export default S1TOP;
