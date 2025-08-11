"use server";

import { createClient } from "@/utils/supabase/server";
import { AuthApiError } from "@supabase/supabase-js";

export const handleSignIn = async (email: string, password: string) => {
  const supabase = createClient();

  try {
    const data = {
      email,
      password,
    };

    const { error: signInError } = await (
      await supabase
    ).auth.signInWithPassword(data);

    //   if sign in error occurs
    if (signInError) throw signInError;

    return {
      success: true,
      status: 200,
      message: "Successfully signed in",
    };
  } catch (e) {
    if (e instanceof AuthApiError) {
      console.error(e);
      return {
        success: false,
        error: "AUTH_ERROR",
        status: 401,
        message: "Invalid Credentials. Please try again",
      };
    }

    console.error(e);
    return {
      success: false,
      error: "UNKNOWN_ERROR",
      status: 500,
      message: "An unexpected error occured. Please try again",
    };
  }
};
