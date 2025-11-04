import Lottie from "lottie-react";
import Link from "next/link";
import dashLottie from "@/public/assets/lottie1.json";
import { Idash_tab } from "@/models/interfaces";
import ExportBtn from "../../misc_ui/export_btn";

const Dashtab: React.FC<Idash_tab> = ({
  animation,
  blurb,
  cta,
  tab_id,
  title,
  href,
}) => {
  return (
    <div className=" w-full space-y-1 group hover:bg-orange-500/30 hover:scale-95 transition duration-150 ease-in lg:w-[30%] min-h-[95%] rounded-lg border-2 border-neutral-400/20 p-3 flex flex-col items-center lg:items-start justify-around">
      <Link
        href={href}
        className={`flex justify-center group-hover:justify-between items-center w-8/12 h-[25vh] lg:w-fit lg:h-fit
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
        <Lottie
          animationData={animation}
          className=" lg:w-28 lg:h-28 w-32 h-32 rounded-full transition-all duration-300 ease-in-out"
        />
      </Link>

      <p className=" text-[16px] group-hover:hidden flex text-center lg:text-start lg:text-[18px] font-semibold ">
        {title}
      </p>
      <p className=" text-[12px] flex text-center lg:text-start pb-5 lg:pb-1 ">
        {blurb}
      </p>
      <ExportBtn cta={cta} />
    </div>
  );
};

export default Dashtab;
