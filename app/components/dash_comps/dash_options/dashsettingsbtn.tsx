import Lottie from "lottie-react";
import lottierushing from "@/public/assets/lottierushing.json";
import Link from "next/link";

const DashSettingsBtn = () => {
  return (
    <Link
      href={"https://github.com/aLearningLad/platamigos_"}
      target="_blank"
      key={3728}
      className=" w-full space-y-1 group hover:bg-black hover:border-none hover:scale-95 transition duration-150 ease-in lg:w-1/3 h-full rounded-lg border-2 border-neutral-400/20 p-3 flex flex-col items-start justify-around"
    >
      <div className=" bg-gradient-to-b from-cyan-700 via-cyan-400/40 to-neutral-50/10 w-8/12 h-[25vh] lg:w-fit lg:h-fit rounded-lg p-1 flex justify-center items-center">
        <Lottie
          animationData={lottierushing}
          className=" w-32 h-32 lg:w-20 lg:h-20 rounded-full"
        />
      </div>
      <p className=" text-[18px] lg:text-[10px] font-bold group-hover:text-white text-center ">
        Source Code
      </p>
      <p className=" text-[14px] lg:text-[10px] group-hover:text-white text-center">
        Explore repository
      </p>
      <button className=" w-full group-hover:bg-pink-500 group-hover:text-black h-16 lg:h-6 text-[14px] lg:text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out bg-neutral-500/10 rounded-[4px] font-bold ">
        Open Github
      </button>
    </Link>
  );
};

export default DashSettingsBtn;
