"use client";

import { signInSubmit } from "@/services/client_side/on_submit/sign_in_form";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [is_new, set_is_new] = useState<boolean>(false);

const SignInForm = () => {
  const router = useRouter();

  return (
    <div className=" w-full min-h-screen bg-black flex flex-col items-center text-white justify-center">
      <h1>Login</h1>
      <form
        onSubmit={(e: FormEvent) => signInSubmit(e, email, password, router)}
        className=" flex flex-col space-y-5 "
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="bg-white text-black "
        />
        <input
          className="bg-white text-black"
          type="password"
          name="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button formAction="submit" type="submit">
          Submit
        </button>
      </form>
      <button onClick={(e) => set_is_new(true)}>I'm new here</button>
    </div>
  );
};

export default SignInForm;
