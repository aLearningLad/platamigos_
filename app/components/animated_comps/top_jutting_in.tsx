"use client";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import { forwardRef } from "react";

const TopJuttingIn = forwardRef<HTMLDivElement>((props, childRef) => (
  <div
    ref={childRef}
    className=" absolute bottom-[60%] left-[27%] rounded-lg h-[50%] w-3/12 juttingcontainer z-10  tohide"
  >
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
        <h3 className=" text-[12px] font-bold ">Megan Khumalo</h3>
        <p className=" text-[10px] text-neutral-700 italic ">Lender</p>
        <div className=" w-full bg-neutral-600/30 my-1 h-[2px] rounded-full " />
        <span className=" w-full flex justify-around   items-center">
          <FaFacebookF size={10} />
          <div className=" w-fit h-fit p-2 rounded-full bg-cyan-400/10 ">
            <RiTwitterXLine size={10} className=" text-cyan-700" />
          </div>
          <RiInstagramFill size={10} />
        </span>
      </div>
    </div>
    {/* inner block */}
  </div>
));

TopJuttingIn.displayName = "TopJuttingIn";
export default TopJuttingIn;
