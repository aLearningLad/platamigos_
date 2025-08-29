"use client";

import Lottie from "lottie-react";
import restingLottie from "@/public/assets/lottieresting.json";
import { IoNotificationsOutline } from "react-icons/io5";

const SidebarNav = () => {
  return (
    <div className=" w-full h-[50%] border-2 border-red-400 flex flex-col ">
      <div className=" w-full h-[15%] flex justify-between items-center pr-3">
        <div className=" flex items-center">
          <Lottie
            animationData={restingLottie}
            className=" w-8 h-8 rounded-full "
          />

          <p className=" text-[10px] font-bold">Thato</p>
        </div>

        <IoNotificationsOutline size={14} className=" text-neutral-400" />
      </div>

      {/* nav tabs */}
    </div>
  );
};

export default SidebarNav;
