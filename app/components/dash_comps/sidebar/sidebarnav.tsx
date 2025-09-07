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
import { ChangeEvent, useEffect, useState } from "react";

const SidebarNav = () => {
  const pathname = usePathname();
  const current = pathname.slice(1);
  const [updated_first_name, set_updated_first_name] = useState<string>("");
  const [updated_alias, set_updated_alias] = useState<string>("");
  const [updated_surname, set_updated_surname] = useState<string>("");
  const [profile_details, set_profile_details] = useState();

  const handleChanges = () => {};

  // fetch current details ===> refactor to fetch from cache
  useEffect(() => {
    const fetchDetails = async () => {
      try {
      } catch (error) {
        console.log("Unable to fetch user's details: ", error);
      }
    };

    fetchDetails();
  }, []);

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
              label="updated_alias"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set_updated_alias(e.target.value)
              }
              placeholder={"Eg. JohnnyBones_97"}
              value={updated_alias}
              key={1}
            />

            {/* updated_name */}
            <InputComp
              label="updated_first_name"
              placeholder="Eg. John Isaac"
              value={updated_first_name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set_updated_first_name(e.target.value)
              }
            />

            {/* updated_surname */}
            <InputComp
              label="updated_surname"
              placeholder="Eg Reed-Milton"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set_updated_surname(e.target.value)
              }
              value={updated_surname}
            />

            {/* save changes */}
            <button className=" w-full peer sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-10 hover:scale-90 bg-green-500 hover:bg-cyan-500 cursor-pointer rounded-[5px] transition-all duration-200 ease-in-out text-white text-[10px] flex justify-center items-center ">
              Save Changes
            </button>

            {/* request account deletion */}
            <div className=" w-full flex flex-col items-center justify-center space-y-1">
              <div className=" w-full flex justify-center flex-col items-center">
                <button className=" w-full cursor-pointer peer sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-10 hover:scale-90 bg-black hover:bg-red-600 rounded-[5px] transition-all duration-200 ease-in-out text-white text-[10px] flex justify-center items-center ">
                  Delete my Account
                </button>
                <div className=" flex text-transparent peer-hover:text-red-600 flex-col items-center  ">
                  <p className="text-[12px] underline mb-1 font-semibold text-center">
                    WARNING
                  </p>
                  <p className=" text-[10px] text-center">
                    This will permanently delete your account. You will have
                    seven (7) days to revoke your decision
                  </p>
                </div>
              </div>
            </div>
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
