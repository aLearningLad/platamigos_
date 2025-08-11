import { handleSignIn } from "@/services/server_side/sign_in";
import { handleSignUp } from "@/services/server_side/sign_up";
import { FormEvent } from "react";

export const signUpSubmit = async (
  e: FormEvent,
  email: string,
  password: string
) => {
  e.preventDefault();

  // check for both email and password --> if null or error, throw exception
  if (!email || email.length < 5 || !password || password.length < 4) {
    throw new Error(
      "User's details are incomplete. Please ensure both password and email are provided"
    );
  }

  const res = await handleSignUp(email, password);
};
