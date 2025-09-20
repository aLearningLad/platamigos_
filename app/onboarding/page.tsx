// remember to revert back to server rendered page, with client components and animations

"use client";

import { useState } from "react";
import OnboardingScreens from "../components/onboarding_ui/onboard_screens";
import loadingLottie from "@/public/assets/lottieloading.json";
import Lottie from "lottie-react";

const OnboardingPage = () => {
  const [is_loading, set_is_loading] = useState<boolean>(false);

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center flex-col ">
        <p className=" text-2xl lg:text-[12px] text-neutral-700">
          Just a moment while we set your profile up...
        </p>
        <Lottie
          animationData={loadingLottie}
          className=" w-32 h-32 lg:w-20 lg:h-20"
        />
      </div>
    ) : (
      <OnboardingScreens set_is_loading={set_is_loading} />
    );
  }
};

export default OnboardingPage;
