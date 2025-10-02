import Lottie from "lottie-react";
import Image from "next/image";
import emailLottie from "@/public/assets/emailLottie.json";
import { forwardRef } from "react";
const MainBlock = forwardRef<HTMLDivElement>((props, childRef) => (
  <div
    ref={childRef}
    className=" w-full lg:w-[55%] h-[70%] bg-neutral-50/70 rounded-lg flex flex-col overflow-clip "
  >
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
));

export default MainBlock;
