"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import { useRef, useState } from "react";
import loginLottie from "@/public/assets/login.json";
import signupLottie from "@/public/assets/signupLottie.json";
import SignUpForm from "../components/auth_ui/signup_form";
import SignInForm from "../components/auth_ui/signin_form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const AuthPage = () => {
  const loginRef = useRef<HTMLButtonElement | null>(null);
  const signupRef = useRef<HTMLButtonElement | null>(null);
  const continueRef = useRef<HTMLButtonElement | null>(null);

  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [is_new, set_is_new] = useState<boolean>(false);
  const [is_selected, set_is_selected] = useState<number>(0);
  const [is_auth, set_is_auth] = useState<boolean>(false);

  const handleAuthType = (is_new: boolean, is_selected: number) => {
    set_is_new(is_new);
    set_is_selected(is_selected);
  };
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // for login
    gsap.from(loginRef.current, {
      scale: 0,
      duration: 0.6,
      ease: "bounce.out",
    });

    // for signup
    gsap.from(signupRef.current, {
      scale: 0,
      duration: 0.8,
      ease: "bounce.out",
    });

    // for continue btn
    gsap.from(continueRef.current, {
      y: 30,
      scale: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "bounce.out",
    });
  });

  if (is_auth) {
    return (
      <div>
        {is_new ? (
          <SignUpForm set_is_new={set_is_new} />
        ) : (
          <SignInForm set_is_new={set_is_new} />
        )}
      </div>
    );
  }

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center flex-col ">
        <h3>Just a second...</h3>
        <p>{"We're"} setting everything up</p>
      </div>
    ) : (
      <div className=" w-full h-screen flex-col flex items-center justify-center p-3 lg:p-0 ">
        <Link href={"/"}>
          <Image
            src={"/assets/applogo.png"}
            alt="app logo"
            width={130}
            height={130}
          />
        </Link>
        <h1 className=" text-2xl lg:text-3xl font-semibold ">
          Welcome to Plata.Migos
        </h1>
        <p className=" text-xl lg:text-[14px] text-center mb-5 lg:mb-0">
          {"We'll"} get you signed in, or setup your account if {"you're"} new
        </p>

        <section className=" w-full h-[60vh] lg:h-[40%] flex flex-col lg:flex-row lg:w-4/12 p-2 md:p-3 lg:p-5 gap-5 ">
          <button
            ref={loginRef}
            onClick={(e) => handleAuthType(false, 0)}
            className={` ${
              is_selected == 0
                ? "bg-orange-500/10 border-orange-800/10"
                : "border-neutral-300/20"
            } w-full lg:w-1/2 cursor-pointer h-1/2 lg:h-full p-3 lg:p-7 border-4 flex flex-col justify-around items-center rounded-lg`}
          >
            <Lottie animationData={loginLottie} className=" w-20 h-20" />
            <p className=" text-2xl lg:text-2xl font-semibold ">Login</p>
            <p className=" text-lg lg:text-[14px] text-neutral-500 font-semibold ">
              You already have an account. Dive right in
            </p>
          </button>
          <button
            ref={signupRef}
            onClick={(e) => handleAuthType(true, 1)}
            className={` ${
              is_selected === 1
                ? "bg-cyan-500/10 border-cyan-700/10"
                : "border-neutral-300/20"
            } w-full lg:w-1/2 cursor-pointer h-1/2 lg:h-full p-3 lg:p-7 border-4 flex flex-col justify-around items-center rounded-lg `}
          >
            <Lottie animationData={signupLottie} className=" w-20 h-20" />
            <p className=" text-2xl lg:text-2xl font-semibold ">Signup</p>
            <p className=" text-lg lg:text-[14px] text-neutral-500 font-semibold ">
              Create an account & start moving plata
            </p>
          </button>
        </section>
        <button
          // ref={continueRef}
          onClick={(e) => set_is_auth(true)}
          className=" w-full lg:w-3/12 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer text-2xl lg:text-[18px] bg-cyan-500 hover:bg-pink-500 text-white mt-5 rounded-[4px] sm:rounded-[6px] lg:rounded-[12px] h-20 lg:h-12 "
        >
          Continue
        </button>
      </div>
    );
  }
};

export default AuthPage;
