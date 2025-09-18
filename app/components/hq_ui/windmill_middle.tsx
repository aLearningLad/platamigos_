import React from "react";

const WindmillMiddle = () => {
  return (
    <div className=" w-full h-[50%] flex flex-col items-start ">
      <h2 className=" text-4xl lg:text-2xl italic text-neutral-600 ">
        plata.migos
      </h2>
      <span className=" flex gap-3 mt-2">
        <p className=" w-fit h-fit py-1 px-2 rounded-[6px] bg-neutral-600/10 text-white text-[16px] lg:text-[8px] ">
          About the platform
        </p>
        <p className=" w-fit h-fit py-1 px-2 rounded-[6px] bg-neutral-600/10 text-white text-[16px] lg:text-[8px] ">
          View Code
        </p>
      </span>
      <p className=" text-[22px] lg:text-[10px] text-neutral-700 w-full lg:w-8/12 mt-2">
        Secure funding for your startup's seed round, pay off tuition, settle
        gambling debt. Whatever your needs, a friend on Platamigos will likely
        help
      </p>
    </div>
  );
};

export default WindmillMiddle;
