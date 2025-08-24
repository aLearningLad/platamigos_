import { handleSignUp } from "@/services/server_side/sign_up";
import { useRouter } from "next/navigation";
import { FormEvent, SetStateAction } from "react";

type NextRouter = ReturnType<typeof useRouter>;

export const signUpSubmit = async (
  e: FormEvent,
  email: string,
  password: string,
  router: NextRouter,
  set_is_loading: React.Dispatch<SetStateAction<boolean>>
) => {
  e.preventDefault();
  set_is_loading(true);
  try {
    // check for both email and password --> if null or error, throw exception
    if (!email || email.length < 5 || !password || password.length < 4) {
      set_is_loading(false);
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
    set_is_loading(false);
    alert("Something went wrong. Please try again");
    console.log("Error while signing in: ", e);
  }
};
