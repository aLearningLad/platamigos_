import { I_progress_circle } from "@/models/interfaces";
import React from "react";

const ProgressCircle: React.FC<I_progress_circle> = ({
  dependent_state,
  id,
  blurb,
  pending_icon,
  title,
}) => {
  return (
    <div className=" w-20 h-20 rounded-full bg-neutral-500/10 flex justify-center items-center flex-col">
      <p className=" text-[10px]">{title}</p>
      <p className={`text-[6px] ${dependent_state && "hidden"} `}>{blurb}</p>
      <div className={`text-[4px] ${dependent_state && "hidden"}`}>x</div>
    </div>
  );
};

export default ProgressCircle;
