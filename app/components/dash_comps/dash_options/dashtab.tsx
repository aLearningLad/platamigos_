import Lottie from "lottie-react";
import Link from "next/link";
import dashLottie from "@/public/assets/lottie1.json";
import { Idash_tab } from "@/models/interfaces";

const Dashtab: React.FC<Idash_tab> = ({
  animation,
  blurb,
  cta,
  tab_id,
  title,
}) => {
  return (
    <Link
      className=" w-full hover:scale-95 transition duration-150 ease-in lg:w-1/3 h-full rounded-lg border-2 border-neutral-400/20 p-3 flex flex-col items-start justify-around"
      href={"/"}
    >
      <Lottie animationData={animation} className=" w-20 h-20 rounded-full" />
      <p className=" text-[10px] font-bold ">{title}</p>
      <p className=" text-[10px] ">{blurb}</p>
      <button className=" w-full h-6 text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out bg-neutral-500/10 rounded-[4px] font-bold ">
        {cta}
      </button>
    </Link>
  );
};

export default Dashtab;
