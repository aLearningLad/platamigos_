import Lottie from "lottie-react";
import loadingLottie from "@/public/assets/lottieloading.json";

const Fetching = () => {
  return (
    <div className=" w-full min-h-screen flex justify-center flex-col items-center p-3">
      <p className=" text-xl lg:-[12px] text-center text-neutral-7 ">
        Just a moment, {"we're"} gathering this {"loan's"} data
      </p>
      <Lottie animationData={loadingLottie} className=" w-20 h-20 " />
    </div>
  );
};

export default Fetching;
