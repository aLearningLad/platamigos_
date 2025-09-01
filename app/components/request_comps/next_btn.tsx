import { I_nextbtn } from "@/models/interfaces";
import React from "react";

const NextBtn: React.FC<I_nextbtn> = ({ btn_color, set_part }) => {
  return (
    <button
      className=" bg-cyan-600 text-white h-8 rounded-[6px] w-full md:w-8/12 lg:w-fit px-12 flex justify-center items-center py-2 text-[12px]"
      onClick={(e) => set_part((prev) => prev + 1)}
    >
      Next
    </button>
  );
};

export default NextBtn;
