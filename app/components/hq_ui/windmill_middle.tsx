import Link from "next/link";
import React from "react";

const WindmillMiddle = () => {
  return (
    <div className=" w-full h-[50%] flex flex-col items-start ">
      <h2 className=" text-4xl lg:text-3xl italic text-neutral-600 ">
        plata.migos
      </h2>
      <span className=" flex gap-3 mt-2">
        <Link
          target="_blank"
          href={"https://github.com/aLearningLad/platamigos_"}
          className=" w-fit h-fit py-1 px-2 rounded-[6px] bg-orange-500/30 text-white text-[16px] lg:text-[12px] "
        >
          About the platform
        </Link>
        <Link
          target="_blank"
          href={"https://github.com/aLearningLad/platamigos_"}
          className=" w-fit h-fit py-1 px-2 rounded-[6px] bg-orange-500/30 text-white text-[16px] lg:text-[8px] "
        >
          View Code
        </Link>
      </span>
      <p className=" text-[22px] lg:text-[14px] text-neutral-700 w-full lg:w-11/12 mt-2">
        Secure funding for your {"startup's"} seed round, pay off tuition,
        settle gambling debt. Whatever your needs, a friend on Platamigos will
        likely help
      </p>
    </div>
  );
};

export default WindmillMiddle;
