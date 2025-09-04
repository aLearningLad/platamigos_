import { I_nextbtn } from "@/models/interfaces";
import React from "react";

const NextBtn: React.FC<I_nextbtn> = ({
  btn_color,
  set_part,
  handleFxn,
  disabler,
}) => {
  return (
    <button
      disabled={disabler}
      className={`bg-cyan-600 ${
        disabler && "brightness-[30%]"
      } cursor-pointer text-white h-8 rounded-[6px] w-full md:w-8/12 lg:w-3/12 flex justify-center items-center py-2 text-[12px]`}
      onClick={(e) => {
        set_part((prev) => prev + 1);
        handleFxn();
      }}
    >
      Next
    </button>
  );
};

export default NextBtn;
