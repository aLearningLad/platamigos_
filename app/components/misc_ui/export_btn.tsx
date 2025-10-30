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
import ExportDynamic from "./export_dynamic";

const ExportBtn = ({ cta }: { cta: string }) => {
  const [is_modal, set_is_modal] = useState<boolean>(false);
  return (
    <Dialog open={is_modal} onOpenChange={() => set_is_modal((prev) => !prev)}>
      <DialogTrigger className=" w-full hover:scale-90 text-white lg:text-black bg-black group-hover:bg-black group-hover:text-white h-16 lg:h-12 text-[14px] lg:text-[12px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out lg:bg-neutral-500/10 rounded-[6px] font-semibold ">
        {cta}
      </DialogTrigger>
      <DialogContent>
        <ExportDynamic set_is_modal={() => set_is_modal((prev) => !prev)} />
      </DialogContent>
    </Dialog>
  );
};

export default ExportBtn;
