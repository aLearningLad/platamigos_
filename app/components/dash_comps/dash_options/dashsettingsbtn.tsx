import Lottie from "lottie-react";
import lottierushing from "@/public/assets/lottierushing.json";

const DashSettingsBtn = () => {
  return (
    <div
      key={3728}
      className=" w-full space-y-1 group hover:bg-black hover:border-none hover:scale-95 transition duration-150 ease-in lg:w-1/3 h-full rounded-lg border-2 border-neutral-400/20 p-3 flex flex-col items-start justify-around"
    >
      <Lottie
        animationData={lottierushing}
        className=" w-20 h-20 rounded-full"
      />
      <p className=" text-[10px] font-bold group-hover:text-white ">Settings</p>
      <p className=" text-[10px] group-hover:text-white ">Explore settings</p>
      <button className=" w-full group-hover:bg-pink-500 group-hover:text-black h-6 text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out bg-neutral-500/10 rounded-[4px] font-bold ">
        Open
      </button>
    </div>
  );
};

export default DashSettingsBtn;
