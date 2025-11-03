"use client";

import lottieLoading from "@/public/assets/lottieloading.json";
import Lottie from "lottie-react";

const FundingLoading = () => {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center text-center flex-col">
      <p className=" text-xl lg:text-[16px] ">Just a minute...</p>
      <p className=" text-lg lg:text-[14px]  mb-12">
        {"We're"} processing your funding offer
      </p>
      <Lottie animationData={lottieLoading} className=" w-32 h-32" />
    </div>
  );
};

export default FundingLoading;
