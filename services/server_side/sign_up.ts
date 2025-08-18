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

    //succesfully signed up
    return "Successfully signed up";
  } catch (e) {
    if (e instanceof AuthApiError) {
      console.error(
        "handleSignUp has failed. Here is a possible cause: ",
        e.cause
      );
      console.error("Here is the error message: ", e.message);

      if (e.message == "User already registered") {
        return "User already registered";
      }

      return {
        e,
      };
    }

    console.log("Unable to sign up because of this: ", e);
  }
};
