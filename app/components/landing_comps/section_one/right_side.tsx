"use client";

import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Lottie from "lottie-react";
import moneyLottie from "@/public/assets/money.json";
import emailLottie from "@/public/assets/emailLottie.json";
import { PiWaveSineDuotone } from "react-icons/pi";

const RightSide = () => {
  const options = {};

  return (
    <div className=" w-full lg:w-5/12 lg:pl-6 pt-5 items-center flex relative h-[40vh] lg:h-[55vh] ">
      {/* top block jutting in */}
      <div className=" absolute bottom-[60%] left-[27%] rounded-lg h-[50%] w-3/12 ">
        {/* inner block */}
        <div className=" w-full h-full relative flex items-end ">
          <div className=" absolute left-[33%] top-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/lady1.png"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className=" bg-white w-full h-[70%] rounded-lg flex flex-col justify-end items-center p-2">
            <h3 className=" text-[10px] font-bold ">Megan Khumalo</h3>
            <p className=" text-[8px] text-neutral-700 italic ">Lender</p>
            <div className=" w-full bg-neutral-600/30 my-1 h-[2px] rounded-full " />
            <span className=" w-full flex justify-around   items-center">
              <FaFacebookF size={8} />
              <div className=" w-fit h-fit p-2 rounded-full bg-cyan-400/10 ">
                <RiTwitterXLine size={8} className=" text-cyan-700" />
              </div>
              <RiInstagramFill size={8} />
            </span>
          </div>
        </div>
        {/* inner block */}
      </div>
      {/* top block jutting in */}

      {/* main block */}
      <div className=" w-full lg:w-[55%] h-[70%] bg-neutral-50/70 rounded-lg flex flex-col overflow-clip ">
        <div className=" h-20 w-full flex flex-row items-center justify-start px-4 ">
          <div className=" relative w-8 h-8 rounded-full overflow-hidden ">
            <Image
              src={"/assets/profile1.png"}
              fill
              alt="profile 1"
              className=" object-cover "
            />
          </div>
          <div className=" w-[80%] h-full flex flex-col justify-center gap-2 pl-2">
            <div className=" h-2 w-full bg-neutral-400/30 rounded-[4px] " />
            <div className=" h-2 w-full bg-neutral-200/60 rounded-[4px] " />
          </div>
        </div>
        <div className=" h-20 w-full flex flex-row items-center justify-start px-4 ">
          <div className=" relative w-8 h-8 rounded-full overflow-hidden ">
            <Image
              src={"/assets/portrait2.png"}
              fill
              alt="profile 1"
              className=" object-cover "
            />
          </div>
          <div className=" w-[80%] h-full flex flex-col justify-center gap-2 pl-2">
            <div className=" h-2 w-full bg-neutral-400/30 rounded-[4px] " />
            <div className=" h-2 w-full bg-neutral-200/60 rounded-[4px] " />
          </div>
        </div>
        <div className=" h-20 w-full flex flex-row relative px-7">
          <div className=" h-full flex flex-col w-full gap-2 ">
            <div className=" h-2 w-[75%] bg-neutral-400/30 rounded-[4px] " />
            <div className=" h-2 w-[55%] bg-neutral-200/60 rounded-[4px] " />
          </div>
          <div className=" rounded-full p-2 bg-teal-600/10 w-14 h-14 flex justify-center items-center absolute right-4">
            <Lottie
              className=" w-12 h-12 "
              animationData={emailLottie}
              loop={true}
            />
          </div>
        </div>
      </div>
      {/* main block */}

      {/* lower block jutting in */}
      <div className=" w-3/12 h-[40%] absolute bottom-0 bg-white left-1 rounded-lg flex flex-col items-center justify-around p-2 ">
        <Lottie
          animationData={moneyLottie}
          loop={true}
          className=" w-12 h-12 "
        />
        <p className=" text-[6px] font-bold ">Request Funding</p>
        <p className=" font-bold text-[14px] ">R75,000+</p>
        <p className=" text-[5px] text-neutral-600 ">w/ fixed interest</p>
        <PiWaveSineDuotone size={24} className=" text-teal-500" />
      </div>
      {/* lower block jutting in */}
    </div>
  );
};

export default RightSide;
