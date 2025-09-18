"use client";

import { I_middle_tab } from "@/models/interfaces";
import Lottie from "lottie-react";

const MiddleTab: React.FC<I_middle_tab> = ({
  animation,
  id,
  tab_text,
  tab_value,
}) => {
  return (
    <div
      key={id}
      className=" w-full lg:w-1/2 h-fit lg:h-full p-4 bg-neutral-600/10 lg:bg-white flex flex-col items-center justify-center rounded-2xl "
    >
      <Lottie
        animationData={animation}
        className=" w-32 h-32 lg:w-16 lg:h-16"
      />
      <h3 className=" text-[32px] lg:text-[17px] font-semibold ">
        {tab_value}
      </h3>
      <p className=" text-[18px] lg:text-[8px] text-neutral-600 ">{tab_text}</p>
    </div>
  );
};

export default MiddleTab;
