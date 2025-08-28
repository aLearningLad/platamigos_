"use client";

import { signUpSubmit } from "@/services/client_side/on_submit/sign_up_form";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const SignUpForm = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [is_loading, set_is_loading] = useState<boolean>(false);

  const router = useRouter();
  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className=" w-full min-h-screen bg-black flex flex-col items-center text-white justify-center">
      <h1>Sign Up</h1>
      <form
        onSubmit={(e: FormEvent) =>
          signUpSubmit(e, email, password, router, set_is_loading)
        }
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
          onChange={handlePwdChange}
        />
        <button
          disabled={password.length < 7}
          className={`${
            password.length < 7
              ? " bg-gray-500 brightness-[40%]"
              : " bg-green-400"
          }`}
          formAction="submit"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <button></button>
    </div>
  );
};

export default SignUpForm;
