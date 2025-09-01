import { I_nextbtn } from "@/models/interfaces";
import React from "react";

const PrevBtn: React.FC<I_nextbtn> = ({ btn_color, set_part, handleFxn }) => {
  return (
    <button
      onClick={(e) => {
        set_part((prev) => prev - 1), handleFxn();
      }}
    >
      Prev
    </button>
  );
};

export default PrevBtn;
