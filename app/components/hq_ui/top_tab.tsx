"use client";

import { I_top_tab } from "@/models/interfaces";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import React, { useRef } from "react";
import { gsap } from "gsap";

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
  const tab1Ref = useRef<HTMLDivElement | null>(null);
  const tab2Ref = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // top tab 1
    gsap.from(tab1Ref.current, {
      scale: 0.3,
      duration: 0.9,
      ease: "bounce.out",
    });

    // top tab 2
    gsap.from(tab2Ref.current, {
      y: 60,
      opacity: 0,
      delay: 0.6,
      duration: 0.8,

      ease: "bounce.out",
    });
  });

  return (
    <div
      ref={title === "Credit Score" ? tab1Ref : tab2Ref}
      className=" w-full lg:p-2 p-5 sm:p-3 lg:w-1/2 min-h-[30vh] lg:min-h-[25vh] bg-neutral-700/10 lg:bg-white rounded-2xl flex-col "
    >
      <span className=" w-full flex justify-center items-center lg:justify-end">
        <Lottie
          animationData={animation}
          className=" w-32 h-32 lg:w-14 lg:h-14"
        />
      </span>
      <h3 className=" text-[22px] lg:text-[10px] font-semibold ">{title}</h3>
      <p className=" text-[14px] lg:text-[9px] text-neutral-700 lg:text-neutral-500 ">
        {blurb}
      </p>
      <div className=" w-full h-full flex flex-col mt-2">
        <span className=" w-full flex justify-between">
          <p className=" text-[34px] lg:text-[10px] font-semibold ">{stat1}</p>
          <p className=" text-[34px] lg:text-[10px] font-semibold ">{stat2}</p>
        </span>
        <span className=" w-full flex justify-between">
          <p className=" text-[14px] lg:text-[8px] text-neutral-600 ">
            {text1}
          </p>
          <p className=" text-[14px] lg:text-[8px] text-neutral-600 ">
            {text2}
          </p>
        </span>
      </div>
    </div>
  );
};

export default TopTab;
