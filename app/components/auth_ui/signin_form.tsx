"use client";

import { Isigninform } from "@/models/interfaces";
import { signInSubmit } from "@/services/client_side/on_submit/sign_in_form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const SignInForm: React.FC<Isigninform> = ({ set_is_new }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Image
        src={"/assets/applogo.png"}
        alt="app logo"
        width={120}
        height={120}
      />
      <p className=" text-[12px] text-neutral-700 ">
        Signing in is so effortless. Go ahead!
      </p>
      <form
        onSubmit={(e: FormEvent) => signInSubmit(e, email, password, router)}
        className=" w-full h-fit py-5 lg:py-7 lg:w-4/12 flex flex-col items-center space-y-5 "
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className=" bg-white border-2 focus:bg-orange-600/10 focus:scale-95 transition duration-300 ease-in py-1 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px]"
        />
        <input
          className=" bg-white border-2 focus:bg-orange-500/10 focus:scale-95 transition duration-300 ease-in py-1 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px]"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button
          className={`${
            password.length < 7 || email.length < 7 || !email.includes("@")
              ? " bg-gray-500 w-full lg:w-5/12 lg:text-[12px] text-white mt-5 rounded-[4px] h-20 lg:h-8 brightness-[40%]"
              : "w-full lg:w-5/12 lg:text-[12px] cursor-pointer bg-cyan-500 text-white mt-5 rounded-[4px] h-20 lg:h-8"
          }`}
          formAction="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
      <span className=" w-full flex justify-center items-center gap-1">
        <p className=" text-neutral-500 text-[12px] ">
          I {"don't"} have an account yet
        </p>
        <button
          onClick={(e) => set_is_new(true)}
          className=" text-cyan-700 text-[12px] underline cursor-pointer "
        >
          Sign Up
        </button>
      </span>
    </div>
  );
};

export default SignInForm;
