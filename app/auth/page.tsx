"use client";

import { signInSubmit } from "@/services/client_side/on_submit/sign_in_form";
import { signUpSubmit } from "@/services/client_side/on_submit/sign_up_form";
import { handleSignIn } from "@/services/server_side/sign_in";
import Lottie from "lottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import loginLottie from "@/public/assets/login.json";
import signupLottie from "@/public/assets/signupLottie.json";
import SignUpForm from "../components/auth_ui/signup_form";
import SignInForm from "../components/auth_ui/signin_form";

const AuthPage = () => {
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [is_new, set_is_new] = useState<boolean>(false);
  const [is_selected, set_is_selected] = useState<number>(0);
  const [is_auth, set_is_auth] = useState<boolean>(false);

  const handleAuthType = (is_new: boolean, is_selected: number) => {
    set_is_new(is_new);
    set_is_selected(is_selected);
  };

  if (is_auth) {
    return (
      <div>
        {is_new ? <SignUpForm set_is_new={set_is_new} /> : <SignInForm />}
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
      <div className=" w-full h-screen flex-col flex items-center justify-center ">
        <Image
          src={"/assets/applogo.png"}
          alt="app logo"
          width={130}
          height={130}
        />
        <h1 className=" text-[14px] font-bold ">Welcome to Plata.Migos</h1>
        <p className=" text-[10px] ">
          We'll get you signed in, or setup your account if you're new
        </p>

        <section className=" w-full h-[60vh] lg:h-[40%] flex flex-col lg:flex-row lg:w-4/12 p-2 md:p-3 lg:p-5 gap-5 ">
          <button
            onClick={(e) => handleAuthType(false, 0)}
            className={` ${
              is_selected == 0
                ? "bg-orange-500/10 border-orange-800/10"
                : "border-neutral-300/20"
            } w-full lg:w-1/2 cursor-pointer h-1/2 lg:h-full p-3 lg:p-7 border-4 flex flex-col justify-around items-center rounded-lg`}
          >
            <Lottie animationData={loginLottie} className=" w-20 h-20" />
            <p className=" text-[14px] font-bold ">Login</p>
            <p className=" text-[10px] text-neutral-400 font-semibold ">
              You already have an account. Dive right in
            </p>
          </button>
          <button
            onClick={(e) => handleAuthType(true, 1)}
            className={` ${
              is_selected === 1
                ? "bg-cyan-500/10 border-cyan-700/10"
                : "border-neutral-300/20"
            } w-full lg:w-1/2 cursor-pointer h-1/2 lg:h-full p-3 lg:p-7 border-4 flex flex-col justify-around items-center rounded-lg `}
          >
            <Lottie animationData={signupLottie} className=" w-20 h-20" />
            <p className=" text-[14px] font-bold ">Signup</p>
            <p className=" text-[10px] text-neutral-400 font-semibold ">
              Create an account & start moving plata
            </p>
          </button>
        </section>
        <button
          onClick={(e) => set_is_auth(true)}
          className=" w-full lg:w-3/12 lg:text-[12px] bg-cyan-500 text-white mt-5 rounded-[4px] h-20 lg:h-8 "
        >
          Continue
        </button>
      </div>
    );

    //   : is_new ? (
    //   <div className=" w-full min-h-screen bg-black flex flex-col items-center text-white justify-center">
    //     <h1>Sign Up</h1>
    //     <form
    //       onSubmit={(e: FormEvent) =>
    //         signUpSubmit(e, email, password, router, set_is_loading)
    //       }
    //       className=" flex flex-col space-y-5 "
    //     >
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //           setEmail(e.target.value)
    //         }
    //         className="bg-white text-black "
    //       />
    //       <input
    //         className="bg-white text-black"
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handlePwdChange}
    //       />
    //       <button
    //         disabled={password.length < 7}
    //         className={`${
    //           password.length < 7
    //             ? " bg-gray-500 brightness-[40%]"
    //             : " bg-green-400"
    //         }`}
    //         formAction="submit"
    //         type="submit"
    //       >
    //         Sign Up
    //       </button>
    //       </form>
    //       <button></button>
    //   </div>
    // ) : (
    //   <div className=" w-full min-h-screen bg-black flex flex-col items-center text-white justify-center">
    //     <h1>Login</h1>
    //     <form
    //       onSubmit={(e: FormEvent) => signInSubmit(e, email, password, router)}
    //       className=" flex flex-col space-y-5 "
    //     >
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //           setEmail(e.target.value)
    //         }
    //         className="bg-white text-black "
    //       />
    //       <input
    //         className="bg-white text-black"
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={(e: ChangeEvent<HTMLInputElement>) =>
    //           setPassword(e.target.value)
    //         }
    //       />
    //       <button formAction="submit" type="submit">
    //         Submit
    //       </button>
    //     </form>
    //     <button onClick={(e) => set_is_new(true)}>I'm new here</button>
    //   </div>
    // );
  }
};

export default AuthPage;
