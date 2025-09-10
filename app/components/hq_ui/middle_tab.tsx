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
      className=" w-full lg:w-1/2 h-full bg-white flex flex-col items-center justify-center rounded-2xl "
    >
      <Lottie animationData={animation} className=" w-16 h-16" />
      <h3 className=" text-[17px] font-semibold ">{tab_value}</h3>
      <p className=" text-[8px] text-neutral-600 ">{tab_text}</p>
    </div>
  );
};

export default MiddleTab;
