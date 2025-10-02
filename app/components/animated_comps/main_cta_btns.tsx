"use client";

import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const MainCTABtns = () => {
  gsap.registerPlugin(useGSAP);

  const authBtnRef = useRef<HTMLDivElement>(null);
  const howBtnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // auth
    gsap.from(authBtnRef.current, {
      x: 400,
      opacity: 0,
      duration: 0.9,
    });

    // how to use
  });

  return (
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
  );
};

export default MainCTABtns;
