"use client";

import Lottie from "lottie-react";
import restingLottie from "@/public/assets/lottieresting.json";
import { IoNotificationsOutline } from "react-icons/io5";
import { sidebarinfo } from "@/dev_data/sidebarinfo";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputComp from "../../settings_comps/input_comp";
import { ChangeEvent, useState } from "react";

const SidebarNav = () => {
  const pathname = usePathname();
  const current = pathname.slice(1);
  const [name, set_name] = useState<string>("");

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
              current === href.slice(1)
                ? "bg-neutral-400/10"
                : "hover:translate-x-1 hover:font-bold transition duration-300 ease-in-out"
            } items-center  justify-start px-2 py-1 gap-1 h-8 rounded-[3px]`}
          >
            {icon}
            <p className=" text-[10px] ">{title}</p>
          </Link>
        ))}

        <Dialog>
          <DialogTrigger>
            <button className="w-full hover:translate-x-1 hover:font-bold transition duration-300 ease-in-out cursor-pointer flex items-center justify-start px-2 py-1 gap-1 h-8 rounded-lg">
              <IoSettingsOutline size={12} className="text-neutral-500" />
              <p className=" text-[10px] ">Settings</p>
            </button>
          </DialogTrigger>
          <DialogContent className=" flex flex-col items-center justify-between py-2 ">
            <DialogHeader>
              <DialogTitle className=" w-full flex justify-center items-center text-center ">
                <p className=" text-[10px] text-neutral-800 ">
                  Update your profile
                </p>
              </DialogTitle>
              <DialogDescription className=" w-full flex justify-center items-center text-center "></DialogDescription>
            </DialogHeader>
            {/* delete loans toggle */}

            {/* alias */}
            <InputComp
              label=""
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set_name(e.target.value)
              }
              placeholder={"prev name here"}
              value={name}
              key={1}
            />

            {/* name */}

            {/* surname */}

            {/* request account deletion */}
          </DialogContent>
        </Dialog>
      </ul>
      <button className=" w-full mt-3 cursor-pointer hover:bg-black hover:text-white transition ease-in duration-300 h-6 font-bold bg-neutral-500/10 text-black rounded-[3px] text-[10px] ">
        Export Data
      </button>
    </div>
  );
};

export default SidebarNav;
