import { I_s4 } from "@/models/interfaces";
import React from "react";

const S4Tab: React.FC<I_s4> = ({ icon, id, text, title }) => {
  return (
    <div className=" w-full h-20 lg:h-16 flex flex-row pl-8">
      <div className=" h-full flex justify-center items-center">{icon}</div>
      <div className=" w-full h-full justify-center pl-2 flex flex-col">
        <h4 className=" text-[16px] lg:text-[18px]">{title}</h4>
        <p className=" text-[14px] lg:text-[12px] ">{text}</p>
      </div>
    </div>
  );
};

export default S4Tab;
