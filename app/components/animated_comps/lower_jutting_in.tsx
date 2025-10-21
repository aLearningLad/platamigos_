import Lottie from "lottie-react";
import moneyLottie from "@/public/assets/money.json";
import { PiWaveSineDuotone } from "react-icons/pi";
import { forwardRef } from "react";

const LowerJuttingIn = forwardRef<HTMLDivElement>((props, childRef) => (
  <div
    ref={childRef}
    className=" w-3/12 h-[40%] absolute bottom-0 bg-white left-1 rounded-lg flex flex-col items-center justify-around p-2 "
  >
    <Lottie animationData={moneyLottie} loop={true} className=" w-12 h-12 " />
    <p className=" text-[6px] font-bold ">Request Funding</p>
    <p className=" font-bold text-[14px] ">R75,000+</p>
    <p className=" text-[5px] text-neutral-600 ">w/ fixed interest</p>
    <PiWaveSineDuotone size={24} className=" text-teal-500" />
  </div>
));

LowerJuttingIn.displayName = "LowerJuttingIn";

export default LowerJuttingIn;
