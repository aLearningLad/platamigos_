import React from "react";

const WindmillTop = () => {
  return (
    <span className=" w-full items-center flex h-[15%] justify-between ">
      <p className=" text-[12px] italic text-white">thathooo_</p>
      <div className=" w-fit px-2 h-fit bg-neutral-700/10 rounded-[12px] ">
        <select
          className=" text-[8px] focus:outline-none cursor-pointer text-white"
          name=""
          id=""
        >
          <option className=" text-black" value="USD">
            1. USD
          </option>
          <option className=" text-black" value="ZAR">
            1. ZAR
          </option>
          <option className=" text-black" value="EUR">
            1. EUR
          </option>
        </select>
      </div>
    </span>
  );
};

export default WindmillTop;
