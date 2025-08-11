"use server";

import { createClient } from "@/utils/supabase/server";
import { AuthApiError } from "@supabase/supabase-js";

export const handleSignUp = async (email: string, password: string) => {
  const supabase = createClient();

  try {
    const data = {
      email,
      password,
    };

    const { error: signUpError } = await (await supabase).auth.signUp(data);

    //   if sign in error occurs
    if (signUpError) throw signUpError;

    return {
      success: true,
      status: 200,
      message: "Successfully signed up",
    };
  } catch (e) {
    if (e instanceof AuthApiError) {
      console.error(e);

      return {
        e,
      };
    }
  }

  return {
    success: false,
    error: "UNKNOWN_ERROR",
    status: 500,
    message: "An unexpected error occured. Please try again",
  };
};
