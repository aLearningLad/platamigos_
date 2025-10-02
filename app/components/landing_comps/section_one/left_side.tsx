import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import MainHeading from "../../animated_comps/main_heading";

const LeftSide = () => {
  return (
    <div className=" w-full h-[55vh] flex-col px-2 lg:px-0 flex lg:w-7/12 lg:h-[65%] lg:items-end lg:pr-12  ">
      <div className=" w-full lg:w-7/12 flex flex-col justify-start">
        <MainHeading />
        <p className=" w-full text-[18px]  lg:text-[12px] mt-5 text-center lg:text-start">
          Secure funding for your startup's seed round, pay off tuition, settle
          gambling debt. Whatever your needs, a friend on Platamigos will likely
          help
        </p>
        <span className=" w-full flex items-center justify-center lg:justify-start lg:flex-row flex-col gap-4 mt-8">
          <Link
            href={"/auth"}
            className=" lg:h-9 h-16 w-full md:w-6/12 text-xl lg:w-4/12 flex justify-center items-center hover:bg-transparent hover:text-orange-400 hover:border-2 hover:border-orange-500 transition-all duration-300 ease-in cursor-pointer bg-orange-500 lg:text-[10px] text-white rounded-[18px] "
          >
            Get Started
          </Link>
          <button className=" flex md:w-1/2 items-center lg:text-black text-white hover:text-white rounded-[18px] bg-cyan-600 lg:bg-transparent cursor-pointer justify-center gap-1 group h-16 lg:h-9 hover:bg-black w-full lg:w-5/12 transition-all duration-300 ease-in text-xl lg:text-[10px] ">
            <FaPlayCircle size={28} />
            How to use
          </button>
        </span>
      </div>
    </div>
  );
};

export default LeftSide;
