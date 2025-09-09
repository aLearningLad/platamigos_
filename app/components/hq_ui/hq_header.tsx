"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import restingLottie from "@/public/assets/lottieresting.json";
import Lottie from "lottie-react";

const HQHeader = () => {
  return (
    <header className=" w-full h-[15vh] border-b-4 border-neutral-300/60  hidden lg:flex justify-between items-center px-1 md:px-4 lg:px-8">
      <p className=" text-2xl font-bold">HQ</p>
      <div className=" flex w-fit gap-x-2 justify-end">
        <div className=" w-fit h-fit p-2 bg-neutral-600/10 rounded-lg text-black">
          <CiSearch size={14} />
        </div>
        <div className=" w-fit h-fit p-2 bg-neutral-600/10 rounded-lg text-black">
          <IoMdNotifications size={14} />
        </div>
        <Link
          className=" flex gap-1 w-fit px-3 items-center justify-center text-white  bg-blue-600 rounded-xl "
          href={""}
        >
          <div className=" text-[10px]">+</div>
          <p className=" text-[10px]">Create a loan request</p>
        </Link>
        <div>
          <Lottie
            animationData={restingLottie}
            className=" w-7 h-7 rounded-full border-4 border-neutral-400/10 "
          />
        </div>
      </div>
    </header>
  );
};

export default HQHeader;
