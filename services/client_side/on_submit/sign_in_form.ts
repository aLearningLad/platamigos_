import { handleSignIn } from "@/services/server_side/sign_in";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const signInSubmit = async (
  e: FormEvent,
  email: string,
  password: string,
  router: NextRouter
) => {
  e.preventDefault();
  const supabase = createClient();

  // check for both email and password --> if null or error, throw exception
  if (!email || email.length < 5 || !password || password.length < 4) {
    throw new Error(
      "User's details are incomplete. Please ensure both password and email are provided"
    );
  }

  const res = await handleSignIn(email, password);

  if (res.error === "AUTH_ERROR") {
    console.log("wrong credentials, bud!");
  }

  // wait to sign in, then check if all_users.onboarded == true: push to dash, else push to onboarding
  if (!res.error) {
    const user_id = (await supabase.auth.getUser()).data.user?.id;

    // check if in all_users.onboarded
    const { data, error: is_onboarded_error } = await supabase
      .from("all_users")
      .select("is_onboarded")
      .eq("user_id", user_id);

    if (data && data.length > 0) {
      const is_onboarded = data[0]["is_onboarded"];
      router.push("/dash");
    } else {
      router.push("/onboarding");
    }
  }
};
