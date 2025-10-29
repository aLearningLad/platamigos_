import { I_s3_tab } from "@/models/interfaces";
import React from "react";

const S3Tab: React.FC<I_s3_tab> = ({
  count,
  icon,
  id,
  text,
  index,
  tabRef,
}) => {
  return (
    <div ref={tabRef} key={id} className=" w-full h-16 flex ">
      <div className=" h-full flex justify-center items-center px-2">
        <div
          className={`w-fit h-fit rounded-full 
            ${index === 0 && " bg-teal-600"} 
            ${index === 1 && " bg-rose-400"} 
            ${index === 2 && " bg-white/60"} 
            
          p-2 `}
        >
          {icon}
        </div>
      </div>

      <div className=" flex flex-col items-start justify-center h-full">
        <p className=" text-[20px] font-bold ">{count}</p>
        <p className=" text-[12px] text-neutral-700">{text}</p>
      </div>
    </div>
  );
};

export default S3Tab;
