"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import toast from "react-hot-toast";

const ExportBtn = ({ cta }: { cta: string }) => {
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [is_modal, set_is_modal] = useState<boolean>(false);

  const handleExport = async () => {
    set_is_loading(true);

    try {
      toast.success("Done!");

      set_is_loading(false);
    } catch (error) {}
  };

  return (
    <Dialog open={is_modal} onOpenChange={() => set_is_modal((prev) => !prev)}>
      <DialogTrigger className=" w-full hover:scale-90 text-white lg:text-black bg-black group-hover:bg-black group-hover:text-white h-16 lg:h-6 text-[14px] lg:text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out lg:bg-neutral-500/10 rounded-[4px] font-bold ">
        {cta}
      </DialogTrigger>
      <DialogContent>
        {is_loading ? (
          <div className=" w-full h-full flex flex-col items-center text-center gap-3 ">
            <p className=" text-[12px] ">Just a moment</p>
          </div>
        ) : (
          <div className=" w-full h-full flex flex-col items-center justify-center text-center">
            <h3 className=" font-semibold">
              {"You're"} about to download your data
            </h3>
            <p className=" text-[12px]">
              It will be saved as a JSON file on your device
            </p>

            <button
              onClick={handleExport}
              className=" w-full cursor-pointer mt-12 mb-4 sm:w-10/12 md:w-8/12 lg:w-6/12 h-10 text-[12px] lg:h-8 rounded-[8px] text-white bg-cyan-500 "
            >
              Continue
            </button>
            <button
              className=" w-full cursor-pointer sm:w-10/12 text-[12px] md:w-8/12 lg:w-6/12 h-10 lg:h-8 rounded-[8px] text-white bg-black "
              onClick={() => set_is_modal((prev) => !prev)}
            >
              Cancel
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExportBtn;
