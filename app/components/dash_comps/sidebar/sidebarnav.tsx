"use client";

import Lottie from "lottie-react";
import restingLottie from "@/public/assets/lottieresting.json";
import { IoIosNotifications } from "react-icons/io";

const SidebarNav = () => {
  return (
    <div className=" w-full h-[50%] border-2 border-red-400 flex flex-col ">
      <div className=" w-full h-[15%] bg-black flex justify-between ">
        <Lottie
          animationData={restingLottie}
          className=" w-12 h-12 rounded-full"
        />

        <p>Thato</p>

        <IoIosNotifications size={12} className=" text-teal-500" />
      </div>
    </div>
  );
};

export default SidebarNav;
