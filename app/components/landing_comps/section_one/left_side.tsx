import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import MainHeading from "../../animated_comps/main_heading";
import MainCTABtns from "../../animated_comps/main_cta_btns";

const LeftSide = () => {
  return (
    <div className=" w-full h-[55vh] flex-col px-2 lg:px-0 flex lg:w-7/12 lg:h-[65%] lg:items-end lg:pr-12  ">
      <div className=" w-full lg:w-7/12 flex flex-col justify-start">
        <MainHeading />
        <p className=" w-full text-[18px]  lg:text-[14px] mt-5 text-center lg:text-start">
          Secure funding for your {"startup's"} seed round, pay off tuition, or
          settle gambling debt. Whatever your needs, a friend on Platamigos will
          likely help
        </p>
        <MainCTABtns />
      </div>
    </div>
  );
};

export default LeftSide;
