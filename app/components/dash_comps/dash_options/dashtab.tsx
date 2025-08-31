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
  href,
}) => {
  return (
    <Link
      className=" w-full space-y-1 group hover:bg-orange-500/30 hover:border-none hover:scale-95 transition duration-150 ease-in lg:w-1/3 h-full rounded-lg border-2 border-neutral-400/20 p-3 flex flex-col items-start justify-around"
      href={href}
    >
      <div
        className={` w-fit h-fit
      ${
        tab_id === 2812792812 &&
        "bg-gradient-to-b from-yellow-600/50 via-yellow-400/30 to-neutral-50/30 "
      }

      ${
        tab_id === 362792947 &&
        "bg-gradient-to-b from-blue-950 via-blue-800/40 to-neutral-50/10"
      }

      ${tab_id === 7382716 && "bg-green-900 "}


      ${
        tab_id === 11364862328 &&
        " bg-gradient-to-br bg-orange-600 via-orange-400 to-orange-900 "
      }

      ${tab_id === 12872736281 && " bg-pink-800/10"}


      rounded-lg px-1`}
      >
        <Lottie animationData={animation} className=" w-20 h-20 rounded-full" />
      </div>
      <p className=" text-[10px] font-bold ">{title}</p>
      <p className=" text-[10px] ">{blurb}</p>
      <button className=" w-full group-hover:bg-black group-hover:text-white h-6 text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out bg-neutral-500/10 rounded-[4px] font-bold ">
        {cta}
      </button>
    </Link>
  );
};

export default Dashtab;
