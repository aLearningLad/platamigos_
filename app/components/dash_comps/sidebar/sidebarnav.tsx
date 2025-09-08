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
import { T_settings_info } from "@/models/types";
import { createClient } from "@/utils/supabase/client";
import useSWR from "swr";
import lottieLoader from "@/public/assets/loaderballs.json";

const SidebarNav = () => {
  const pathname = usePathname();
  const current = pathname.slice(1);
  const [updated_first_name, set_updated_first_name] = useState<string>("");
  const [updated_alias, set_updated_alias] = useState<string>("");
  const [updated_surname, set_updated_surname] = useState<string>("");
  const [profile_details, set_profile_details] = useState<T_settings_info>();
  const [is_different, set_is_different] = useState<boolean>(false);
  const [is_updating, set_is_updating] = useState<boolean>(false);
  const [is_dialog_open, set_is_dialog_open] = useState<boolean>(false);

  const fetchDetails = async () => {
    const supabase = createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    try {
      const { data: user_data, error: fetchError } = await supabase
        .from("all_users")
        .select("name, surname, alias")
        .eq("user_id", user_id);

      console.log("alias from db: ", user_data![0].alias);

      return user_data;
    } catch (error) {
      console.log("Unable to fetch user's details: ", error);
    }
  };

  const handleProfileUpdate = async () => {
    set_is_updating(true);
    const { alias, name, surname } = user_data![0];
    const new_alias =
      updated_alias.length > 2 ? updated_alias : user_data![0].alias;
    const new_name =
      updated_first_name.length > 2 ? updated_first_name : user_data![0].name;
    const new_surname =
      updated_surname.length > 2 ? updated_surname : user_data![0].surname;

    // check surname
    if (updated_surname.length < 3) {
      set_updated_surname(surname);
    }

    // update table
    const supabase = createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    try {
      const { error: update_error } = await supabase
        .from("all_users")
        .update({
          name: new_name,
          alias: new_alias,
          surname: new_surname,
        })
        .eq("user_id", user_id);

      if (update_error) throw new Error(update_error.details);
      set_is_updating(false);
      alert("Details successfully updated");
      set_is_dialog_open(false);
    } catch (error) {
      set_is_updating(false);
      alert("Unable to update your details. Please try again later");
      set_is_dialog_open(false);
      console.error("Unable to update user details: ", error);
    }
  };

  const {
    data: user_data,
    error: user_data_error,
    isLoading,
  } = useSWR("user-details", fetchDetails);

  if (isLoading) {
    return (
      <div className=" w-full h-[60%] flex justify-center items-center ">
        <Lottie animationData={lottieLoader} className=" w-20 h-20 " />
      </div>
    );
  }

  if (user_data_error) {
    return (
      <div className=" w-full h-[60%] flex items-center justify-center flex-col px-2 ">
        <p className=" text-start text-[12px]">An error has occured</p>
        <p className=" text-start text-[10px]">Please contact the developer</p>
      </div>
    );
  }

  if (user_data != null) {
    return (
      <div className=" w-full h-[60%] flex flex-col ">
        <div className=" w-full h-[15%] flex justify-between items-center pr-3 border-b-[2px] rounded-full mb-3 border-neutral-500/20">
          <div className=" flex items-center">
            <Lottie
              animationData={restingLottie}
              className=" w-8 h-8 rounded-full "
            />

            <p className=" text-[10px] font-bold">{user_data[0].alias}</p>
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

          <Dialog
            open={is_dialog_open}
            onOpenChange={() => set_is_dialog_open((prev) => !prev)}
          >
            <DialogTrigger>
              <button className="w-full hover:translate-x-1 hover:font-bold transition duration-300 ease-in-out cursor-pointer flex items-center justify-start px-2 py-1 gap-1 h-8 rounded-lg">
                <IoSettingsOutline size={12} className="text-neutral-500" />
                <p className=" text-[10px] ">Settings</p>
              </button>
            </DialogTrigger>
            {is_updating ? (
              <>bruv</>
            ) : (
              <DialogContent className=" flex flex-col items-center justify-between py-2 h-screen lg:h-[90vh] ">
                <DialogHeader>
                  <DialogTitle className=" w-full flex justify-center items-center text-center ">
                    <p className=" text-[10px] text-neutral-800 ">
                      Update your profile
                    </p>
                  </DialogTitle>
                  <DialogDescription className=" w-full flex justify-center items-center text-center ">
                    <p className=" text-[12px] text-neutral-700">
                      Tweak your details or request to have your account
                      permanently deleted, a week from your opt-in
                    </p>
                  </DialogDescription>
                </DialogHeader>

                <div className=" w-full flex flex-col items-center justify-center gap-1">
                  {/* alias */}
                  <InputComp
                    label="Update your alias"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      set_updated_alias(e.target.value)
                    }
                    placeholder={`Currently "${user_data[0].alias}"`}
                    value={updated_alias}
                    key={1}
                    checker={updated_alias.length > 3}
                    warning_text="This needs to be at least 4 characters long, or your current alias will persist"
                    passing_text="Looks great"
                  />
                </div>

                {/* updated_name */}
                <InputComp
                  label="Update your name"
                  placeholder={`Currently "${user_data[0].name}"`}
                  value={updated_first_name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    set_updated_first_name(e.target.value)
                  }
                  checker={updated_first_name.length > 3}
                  warning_text="This needs to be at least 4 characters long, or your current name will persist"
                  passing_text="Looks great"
                />

                {/* updated_surname */}
                <InputComp
                  label="updated_surname"
                  placeholder={`Currently "${user_data[0].surname}"`}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    set_updated_surname(e.target.value)
                  }
                  value={updated_surname}
                  warning_text="This needs to be at least 4 characters long, or your current surname will persist"
                  passing_text="Looks great"
                  checker={updated_surname.length > 3}
                />

                {/* save changes */}
                <button
                  onClick={handleProfileUpdate}
                  disabled={
                    updated_first_name.length < 3 &&
                    updated_alias.length < 3 &&
                    updated_surname.length < 3
                  }
                  className={`w-full peer sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-10 hover:scale-90 ${
                    updated_first_name.length > 2 ||
                    updated_alias.length > 2 ||
                    updated_surname.length > 3
                      ? "bg-green-500 hover:bg-cyan-500"
                      : " brightness-[60%] bg-green-500 text-white"
                  }  cursor-pointer rounded-[5px] transition-all h-10 duration-200 ease-in-out text-white text-[10px] flex justify-center items-center`}
                >
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
            )}
          </Dialog>
        </ul>
        <button className=" w-full mt-3 cursor-pointer hover:bg-black hover:text-white transition ease-in duration-300 h-6 font-bold bg-neutral-500/10 text-black rounded-[3px] text-[10px] ">
          Export Data
        </button>
      </div>
    );
  }
};

export default SidebarNav;
