"use client";

import { I_top_tab } from "@/models/interfaces";
import Lottie from "lottie-react";
import React from "react";

const TopTab: React.FC<I_top_tab> = ({
  animation,
  blurb,
  id,
  stat1,
  stat2,
  text1,
  text2,
  title,
}) => {
  return (
    <div className=" w-full p-2 lg:w-1/2 h-full bg-white rounded-2xl flex-col ">
      <span className=" w-full flex justify-end">
        <Lottie animationData={animation} className=" w-14 h-14" />
      </span>
      <h3 className=" text-[10px] font-semibold ">{title}</h3>
      <p className=" text-[9px] text-neutral-500 ">{blurb}</p>
      <div className=" w-full h-full flex flex-col mt-2">
        <span className=" w-full flex justify-between">
          <p className=" text-[10px] font-semibold ">{stat1}</p>
          <p className=" text-[10px] font-semibold ">{stat2}</p>
        </span>
        <span className=" w-full flex justify-between">
          <p className=" text-[8px] text-neutral-600 ">{text1}</p>
          <p className=" text-[8px] text-neutral-600 ">{text2}</p>
        </span>
      </div>
    </div>
  );
};

export default TopTab;
