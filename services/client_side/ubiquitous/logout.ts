"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type NextRouter = ReturnType<typeof useRouter>;
export const handleSignOut = async (
  router: NextRouter,
  is_loading: boolean,
  set_is_loading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  set_is_loading(true);
  try {
    const supabase = createClient();
    const { error: sign_out_error } = await supabase.auth.signOut();

    if (sign_out_error) throw new Error(sign_out_error.message);

    set_is_loading(false);
    alert("Signing out...");
    router.push("/");
  } catch (error) {
    alert("Unable to sign out. Please try again");
    console.log(error);
  }
};
