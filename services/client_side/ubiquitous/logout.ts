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
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    const cache_key = `${user_id}-community_loans`;

    const { error: sign_out_error } = await supabase.auth.signOut();

    if (sign_out_error) throw new Error(sign_out_error.message);

    // call route to clear cache
    await fetch("/api/clear_cache", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cache_key }),
    });

    alert("Signing out...");
    router.refresh();
    router.push("/");
  } catch (error) {
    alert("Unable to sign out. Please try again");
    console.log(error);
  }
};
