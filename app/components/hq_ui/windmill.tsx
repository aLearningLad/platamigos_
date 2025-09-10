import React from "react";

const Windmill = () => {
  return (
    <div className=" w-full h-[60%] bg-gradient-to-br from-purple-700/20 via-pink-300/30 to-rose-600/20 rounded-3xl relative flex flex-col p-2 lg:p-4">
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

      {/* middle */}
      <div className=" w-full h-[50%] flex flex-col items-start ">
        <h2 className=" text-2xl italic text-white ">plata.migos</h2>
        <span className=" flex gap-3 mt-2">
          <p className=" w-fit h-fit py-1 px-2 rounded-[6px] bg-neutral-600/10 text-white text-[8px] ">
            About the platform
          </p>
          <p className=" w-fit h-fit py-1 px-2 rounded-[6px] bg-neutral-600/10 text-white text-[8px] ">
            View Code
          </p>
        </span>
        <p className=" text-[10px] text-neutral-700 w-full lg:w-8/12 mt-2">
          Secure funding for your startup's seed round, pay off tuition, settle
          gambling debt. Whatever your needs, a friend on Platamigos will likely
          help
        </p>
      </div>

      {/* bottom */}
      <div className=" w-full h-[35%] border-black border-2 flex flex-col ">
        <section className=" w-6/12 flex justify-between items-center">
          <div className=" flex flex-col items-center ">
            <p className=" text-[8px]">3</p>
            <p className=" text-[6px]">Debt</p>
          </div>
          <div className=" text-[5px]">:</div>
          <div className=" flex flex-col items-center ">
            <p className=" text-[8px]">1</p>
            <p className=" text-[6px]">Accrued Income</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Windmill;
