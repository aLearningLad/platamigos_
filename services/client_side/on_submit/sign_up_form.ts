import { handleSignUp } from "@/services/server_side/sign_up";
import { redirect, useRouter } from "next/navigation";
import { FormEvent } from "react";

type NextRouter = ReturnType<typeof useRouter>;

export const signUpSubmit = async (
  e: FormEvent,
  email: string,
  password: string,
  router: NextRouter
) => {
  e.preventDefault();

  try {
    // check for both email and password --> if null or error, throw exception
    if (!email || email.length < 5 || !password || password.length < 4) {
      throw new Error(
        "User's details are incomplete. Please ensure both password and email are provided"
      );
    }

    const res = await handleSignUp(email, password);

    // user already exists
    if (res == "User already registered") {
      router.push("/exists");
    }

    // success
    if (res == "Successfully signed up") {
      router.push("/onboarding");
    }
  } catch (error) {
    console.log("Error while signing in: ", e);
  }
};
