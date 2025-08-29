"use client";

import Lottie from "lottie-react";
import restingLottie from "@/public/assets/lottieresting.json";
import { IoNotificationsOutline } from "react-icons/io5";
import { sidebarinfo } from "@/dev_data/sidebarinfo";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const SidebarNav = () => {
  const pathname = usePathname();
  const current = pathname.slice(1);

  return (
    <div className=" w-full h-[60%] flex flex-col ">
      <div className=" w-full h-[15%] flex justify-between items-center pr-3 border-b-[2px] rounded-full mb-3 border-neutral-500/20">
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
      <ul className=" space-y-1">
        {sidebarinfo.map(({ href, icon, id, title }) => (
          <Link
            href={href}
            key={id}
            className={`w-full flex ${
              current === href.slice(1) && "bg-neutral-400/10"
            } items-center justify-start px-2 py-1 gap-1 h-8 rounded-[3px]`}
          >
            {icon}
            <p className=" text-[10px] ">{title}</p>
          </Link>
        ))}
        <button className="w-full flex items-center justify-start px-2 py-1 gap-1 h-8 rounded-lg">
          <IoSettingsOutline size={12} className="text-neutral-500" />
          <p className=" text-[10px] ">Settings</p>
        </button>
      </ul>
      <button className=" w-full mt-3 hover:bg-black hover:text-white transition ease-in duration-300 h-6 font-bold bg-neutral-500/10 text-black rounded-[3px] text-[10px] ">
        Export Data
      </button>
    </div>
  );
};

export default SidebarNav;
