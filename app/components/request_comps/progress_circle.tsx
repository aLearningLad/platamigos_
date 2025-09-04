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
    <div className=" w-20 h-20 bg-neutral-500/10 flex justify-center items-center flex-col mx-5 rounded-lg">
      <div
        className={` rounded-full h-[50%] w-[50%] ${
          dependent_state ? " bg-green-500" : " bg-neutral-600/20"
        } flex justify-center items-center `}
      >
        {dependent_state ? (
          pending_icon
        ) : (
          <p className=" text-[12px] text-neutral-600">{id}</p>
        )}
      </div>
      <p className=" text-[8px] mt-1 ">{title}</p>
    </div>
  );
};

export default ProgressCircle;
