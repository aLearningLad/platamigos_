import { I_nextbtn } from "@/models/interfaces";
import React from "react";

const PrevBtn: React.FC<I_nextbtn> = ({ btn_color, set_part, handleFxn }) => {
  return (
    <button
      className=" bg-red-600 cursor-pointer text-white h-8 rounded-[6px] w-full md:w-8/12 lg:w-3/12 px-12 flex justify-center items-center py-2 text-[12px]"
      onClick={(e) => {
        set_part((prev) => prev - 1), handleFxn();
      }}
    >
      Prev
    </button>
  );
};

export default PrevBtn;
