import Lottie from "lottie-react";
import Link from "next/link";
import dashLottie from "@/public/assets/lottie1.json";

const Dashtab = () => {
  return (
    <Link
      className=" w-full hover:scale-95 transition duration-150 ease-in lg:w-1/3 h-full rounded-lg border-2 border-neutral-400/20 p-3 flex flex-col items-start justify-around"
      href={"/"}
    >
      <Lottie animationData={dashLottie} className=" w-20 h-20 rounded-full" />
      <p className=" text-[10px] font-bold ">Dashboard</p>
      <p className=" text-[10px] ">
        Your home base. Plan out your next move. Secure funding or seed an{" "}
        {"amigo's"} dream
      </p>
      <button className=" w-full h-6 text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out bg-neutral-500/10 rounded-[4px] font-bold ">
        Export Data
      </button>
    </Link>
  );
};

export default Dashtab;
