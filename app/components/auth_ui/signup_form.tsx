"use client";

import { Isignupform } from "@/models/interfaces";
import { signUpSubmit } from "@/services/client_side/on_submit/sign_up_form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const SignUpForm: React.FC<Isignupform> = ({ set_is_new }) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [is_loading, set_is_loading] = useState<boolean>(false);

  const router = useRouter();
  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center">
      <Image
        src={"/assets/applogo.png"}
        alt="app logo"
        width={120}
        height={120}
      />
      <p className=" text-[12px] text-neutral-700 ">
        Let's get your account registered
      </p>
      <form
        onSubmit={(e: FormEvent) =>
          signUpSubmit(e, email, password, router, set_is_loading)
        }
        className=" w-full h-fit py-5 lg:py-7 lg:w-4/12 flex flex-col items-center space-y-5 "
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="bg-white border-2 py-1 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px] "
        />
        <input
          className="bg-white border-2 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px] py-1"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePwdChange}
        />
        <button
          disabled={
            password.length < 7 || email.length < 7 || !email.includes("@")
          }
          className={`${
            password.length < 7 || email.length < 7 || !email.includes("@")
              ? " bg-gray-500 w-full lg:w-5/12 lg:text-[12px] text-white mt-5 rounded-[4px] h-20 lg:h-8 brightness-[40%]"
              : "w-full lg:w-5/12 lg:text-[12px] bg-cyan-500 text-white mt-5 rounded-[4px] h-20 lg:h-8"
          }`}
          formAction="submit"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <span className=" w-full flex justify-center items-center gap-1">
        <p className=" text-neutral-500 text-[12px] ">
          Hang on, I actually have an account!
        </p>
        <button
          onClick={(e) => set_is_new(false)}
          className=" text-cyan-700 text-[12px] underline cursor-pointer "
        >
          Login
        </button>
      </span>
    </div>
  );
};

export default SignUpForm;
