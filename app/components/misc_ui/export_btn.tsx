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

const ExportBtn = ({ cta }: { cta: string }) => {
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [is_modal, set_is_modal] = useState<boolean>(false);

  return (
    <Dialog open={is_modal} onOpenChange={() => set_is_modal((prev) => !prev)}>
      <DialogTrigger className=" w-full text-white lg:text-black bg-black group-hover:bg-black group-hover:text-white h-16 lg:h-6 text-[14px] lg:text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out lg:bg-neutral-500/10 rounded-[4px] font-bold ">
        {cta}
      </DialogTrigger>
      <DialogContent>
        <div className=" w-full h-full flex flex-col items-center justify-center text-center">
          <h3 className=" font-semibold">
            {"You're"} about to download your data
          </h3>
          <p className=" text-[12px]">
            It will be saved as a JSON file on your device
          </p>

          <button>Continue</button>
          <button onClick={() => set_is_modal((prev) => !prev)}>Cancel</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportBtn;
