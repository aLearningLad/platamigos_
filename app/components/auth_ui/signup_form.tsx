"use client";

import { Isignupform } from "@/models/interfaces";
import { signUpSubmit } from "@/services/client_side/on_submit/sign_up_form";
import Lottie from "lottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import loadingLottie from "@/public/assets/lottieloading.json";

const SignUpForm: React.FC<Isignupform> = ({ set_is_new }) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [is_loading, set_is_loading] = useState<boolean>(false);

  const router = useRouter();
  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (is_loading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center ">
        <p className=" text-2xl text-center lg:text-[12px] text-neutral-700">
          Just a moment...
        </p>
        <Lottie animationData={loadingLottie} className=" w-20 h-20" />
      </div>
    );
  }

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center p-3">
      <Image
        src={"/assets/applogo.png"}
        alt="app logo"
        width={120}
        height={120}
      />
      <p className="lg:text-[14px] text-neutral-700 text-2xl">
        {"Let's"} get your account registered
      </p>
      <form
        onSubmit={(e: FormEvent) =>
          signUpSubmit(e, email, password, router, set_is_loading)
        }
        className="w-full h-fit py-5 lg:py-7 lg:w-4/12 flex flex-col items-center space-y-5 "
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className=" w-full sm:w-10/12 md:w-8/12 bg-white border-2 focus:bg-orange-600/10 focus:scale-95 transition duration-300 lg:h-12 h-20 ease-in py-1 border-neutral-500/20 px-3 text-lg lg:text-[14px] focus:outline-none rounded-[6px]"
        />
        <input
          className=" w-full sm:w-10/12 md:w-8/12 bg-white border-2 focus:bg-orange-600/10 focus:scale-95 transition duration-300 lg:h-12 h-20 ease-in py-1 border-neutral-500/20 px-3 text-lg lg:text-[14px] focus:outline-none rounded-[6px]"
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
              ? " bg-gray-500 w-full lg:w-5/12 lg:text-[12px] text-white mt-5 rounded-[4px] h-20 lg:h-12 brightness-[70%]"
              : "w-full lg:w-5/12 lg:text-[12px] bg-cyan-500 cursor-pointer text-white mt-5 rounded-[4px] h-20 lg:h-12"
          }`}
          formAction="submit"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <span className=" w-full flex lg:flex-row flex-col justify-center items-center gap-1 text-center">
        <p className=" text-neutral-500 text-xl text-center lg:text-[14px] ">
          Hang on, I actually have an account!
        </p>
        <button
          onClick={(e) => set_is_new(false)}
          className=" text-cyan-700 text-lg lg:text-[14px] underline cursor-pointer "
        >
          Login
        </button>
      </span>
    </div>
  );
};

export default SignUpForm;
