import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className=" w-full h-[40vh] flex-col flex lg:w-7/12 lg:h-[65%] lg:items-end lg:pr-12  ">
      <div className=" w-full lg:w-7/12 flex flex-col justify-start">
        <h1 className=" text-4xl font-bold">
          Send plata <br /> between amigos, <br /> quick & easy
        </h1>
        <p className=" w-full  text-[12px] mt-5 ">
          Secure funding for your startup's seed round, pay off tuition, settle
          gambling debt. Whatever your needs, a friend on Platamigos will likely
          help
        </p>
        <span className=" w-full flex lg:flex-row flex-col gap-4 mt-8">
          <button className=" h-9 w-4/12 hover:bg-transparent hover:text-orange-400 hover:border-2 hover:border-orange-500 transition-all duration-300 ease-in cursor-pointer bg-orange-500 text-[10px] text-white rounded-[18px] ">
            Get Started
          </button>
          <button className=" flex items-center hover:text-white rounded-[18px] cursor-pointer justify-center gap-1 group hover:bg-black w-5/12 transition-all duration-300 ease-in text-[10px] ">
            <FaPlayCircle size={32} />
            How to use
          </button>
        </span>
      </div>
    </div>
  );
};

export default LeftSide;
