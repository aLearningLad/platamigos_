"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SidebarSignOut = () => {
  const [is_modal, set_is_modal] = useState<boolean>(false);
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();

    try {
      const { error: sign_out_error } = await supabase.auth.signOut();

      if (sign_out_error) throw new Error(sign_out_error.message);
      toast.success("Signing out...");
      router.push("/auth");
      router.refresh();
    } catch (error) {
      console.error("Unable to sign out: ", error);
      toast.error("Unable to sign out");
    }
  };

  return (
    <Dialog open={is_modal} onOpenChange={() => set_is_modal((prev) => !prev)}>
      <DialogTrigger className=" cursor-pointer">
        <header className=" flex w-full h-12 items-center justify-start ">
          <Image
            src={"/assets/applogo.png"}
            width={40}
            height={40}
            alt="app logo"
          />
          <p className=" italic text-[12px] ">Plata.Migos</p>
        </header>
      </DialogTrigger>
      <DialogContent>
        <div className=" w-full h-full justify-center flex flex-col items-center text-center ">
          <p className=" mb-12 ">{"You're"} about to sign out</p>

          <button
            onClick={handleSignOut}
            className=" cursor-pointer w-full mb-3 sm:w-10/12 md:w-8/12 lg:w-6/12 h-10 rounded-lg bg-cyan-500 text-white text-[14px] lg:text-[11px]"
          >
            Sign Out
          </button>
          <button
            onClick={() => set_is_modal((prev) => !prev)}
            className=" cursor-pointer w-full sm:w-10/12 md:w-8/12 lg:w-6/12 h-10 rounded-lg bg-black text-white text-[14px] lg:text-[11px] "
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SidebarSignOut;
