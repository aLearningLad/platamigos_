// remember to revert back to server rendered page, with client components and animations

"use client";

import { createClient } from "@/utils/supabase/client";
import { ChangeEvent, useState } from "react";

const handleOnboarding = async (
  first_name: string,
  surname: string,
  alias: string
) => {
  try {
    const supabase = createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    const email = (await supabase.auth.getUser()).data.user?.email;

    // write user to all_users
    const { error: onboarding_error } = await supabase
      .from("all_users")
      .insert({
        user_id: user_id,
        name: first_name,
        surname: surname,
        email: email,
        is_active: true,
        role: "borrower/lender",
        alias: alias,
      });

    // catch error
    if (onboarding_error) throw new Error(onboarding_error.details);

    // write to credit_scores table

    // catch error

    // write to transaction_log

    // catch error
  } catch (e) {}
};

const OnboardingPage = () => {
  const [first_name, set_first_name] = useState<string>("");
  const [surname, set_surname] = useState<string>("");
  const [alias, set_alias] = useState<string>("");

  return (
    <div className="w-full min-h-screen flex justify-center items-center space-y-3 flex-col">
      <input
        className=" bg-black w-56 h-8 text-white"
        type="text"
        name="first_name"
        id="first_name"
        placeholder="first name"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_first_name(e.target.value)
        }
      />
      <input
        className=" bg-black w-56 h-8 text-white"
        type="text"
        name="surname"
        id="surname"
        placeholder="surname"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_surname(e.target.value)
        }
      />
      <input
        className=" bg-black w-56 h-8 text-white"
        type="text"
        name="alias"
        id="alias"
        placeholder="alias"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_alias(e.target.value)
        }
      />

      <button
        disabled={
          first_name.length < 5 || surname.length < 1 || alias.length < 3
        }
        className={`  text-white px-7 h-8 ${
          first_name.length < 5 || surname.length < 1 || alias.length < 3
            ? " bg-gray-400 brightness-[40%]"
            : "bg-green-400 brightness-100"
        }`}
      >
        Complete!
      </button>
    </div>
  );
};

export default OnboardingPage;
