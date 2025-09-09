import React from "react";

const Windmill = () => {
  return (
    <div className=" w-full h-[60%] bg-gradient-to-br from-purple-700/20 via-pink-300/30 to-rose-600/20 rounded-3xl relative flex flex-col p-2 lg:p-4">
      <span className=" w-full items-center flex h-[15%] justify-between ">
        <p className=" text-[12px] italic text-white">thathooo_</p>
        <div className=" w-fit px-2 h-fit bg-neutral-700/10 rounded-[12px] ">
          <select className=" text-[8px] text-white" name="" id="">
            <option value="USD">1. USD</option>
            <option value="ZAR">1. ZAR</option>
            <option value="EUR">1. EUR</option>
          </select>
        </div>
      </span>
    </div>
  );
};

export default Windmill;
