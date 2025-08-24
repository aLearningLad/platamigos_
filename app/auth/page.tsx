"use client";

import { signInSubmit } from "@/services/client_side/on_submit/sign_in_form";
import { signUpSubmit } from "@/services/client_side/on_submit/sign_up_form";
import { handleSignIn } from "@/services/server_side/sign_in";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [is_loading, set_is_loading] = useState<boolean>(false);

  const handlePwdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center flex-col ">
        <h3>Just a second...</h3>
        <p>{"We're"} setting everything up</p>
      </div>
    ) : (
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
      </div>

      // <div className=" w-full min-h-screen bg-black flex flex-col items-center text-white justify-center">
      //   <h1>Sign Up</h1>
      //   <form
      //     onSubmit={(e: FormEvent) =>
      //       signUpSubmit(e, email, password, router, set_is_loading)
      //     }
      //     className=" flex flex-col space-y-5 "
      //   >
      //     <input
      //       type="email"
      //       name="email"
      //       value={email}
      //       onChange={(e: ChangeEvent<HTMLInputElement>) =>
      //         setEmail(e.target.value)
      //       }
      //       className="bg-white text-black "
      //     />
      //     <input
      //       className="bg-white text-black"
      //       type="password"
      //       name="password"
      //       value={password}
      //       onChange={handlePwdChange}
      //     />
      //     <button
      //       disabled={password.length < 7}
      //       className={`${
      //         password.length < 7
      //           ? " bg-gray-500 brightness-[40%]"
      //           : " bg-green-400"
      //       }`}
      //       formAction="submit"
      //       type="submit"
      //     >
      //       Sign Up
      //     </button>
      //   </form>
      // </div>
    );
  }
};

export default AuthPage;
