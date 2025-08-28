// remember to revert back to server rendered page, with client components and animations

"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, SetStateAction, useState } from "react";
import OnboardingScreens from "../components/onboarding_ui/onboard_screens";

const OnboardingPage = () => {
  const [is_loading, set_is_loading] = useState<boolean>(false);

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center ">
        Setting your profile up...
      </div>
    ) : (
      <OnboardingScreens set_is_loading={set_is_loading} />
    );
  }
};

export default OnboardingPage;
