"use client";

import { Ionboarding_screens } from "@/models/interfaces";
import { NextRouter } from "@/models/types";
import { createClient } from "@/utils/supabase/client";
import { showTime } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, SetStateAction, useState } from "react";

const OnboardingScreens: React.FC<Ionboarding_screens> = ({
  set_is_loading,
}) => {
  const [first_name, set_first_name] = useState<string>("");
  const [surname, set_surname] = useState<string>("");
  const [alias, set_alias] = useState<string>("");
  const router = useRouter();

  const handleOnboarding = async (
    first_name: string,
    surname: string,
    alias: string,
    router: NextRouter,
    set_is_loading: React.Dispatch<SetStateAction<boolean>>
  ) => {
    set_is_loading(true);
    try {
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      const email = (await supabase.auth.getUser()).data.user?.email;
      const last_login_at = showTime();

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
          is_onboarded: true,
        });

      // catch error
      if (onboarding_error) throw new Error(onboarding_error.message);

      // write to credit_scores table
      const { error: credit_score_error } = await supabase
        .from("credit_scores")
        .insert({
          user_id: user_id,
          score: 0,
          balance: 2000,
          loans_funded: 0,
          debts_settled: 0,
          total_creditors: 0,
          total_debtors: 0,
        });
      // catch error
      if (credit_score_error) throw new Error(credit_score_error.message);

      // write to transaction_log
      const { error: transaction_log_error } = await supabase
        .from("transactions_log")
        .insert({
          debtor_id: user_id,
          creditor_id: user_id,
          details: `User with ID-${user_id} has been onboarded`,
          action_type: "signup",
        });
      // catch error
      if (transaction_log_error) throw new Error(transaction_log_error.message);

      router.push("/dash");
    } catch (e) {
      set_is_loading(false);
      alert("Onboarding failed. Please try again");
      console.log("Onboarding has failed. Here's why: ", e);
      return;
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center space-y-3 flex-col p-3">
      <p className=" text-2xl lg:text-[12px] text-neutral-500 ">
        Add a few details to your profile
      </p>
      <input
        className="lg:h-12 h-20 bg-white w-full sm:w-10/12 md:w-8/12 border-2 focus:bg-orange-500/10 focus:scale-95 transition duration-300 ease-in py-1 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px]"
        type="text"
        name="first_name"
        id="first_name"
        placeholder="first name"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_first_name(e.target.value)
        }
      />
      <input
        className="lg:h-12 h-20 bg-white w-full sm:w-10/12 md:w-8/12 border-2 focus:bg-orange-500/10 focus:scale-95 transition duration-300 ease-in py-1 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px]"
        type="text"
        name="surname"
        id="surname"
        placeholder="surname"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_surname(e.target.value)
        }
      />
      <input
        className="lg:h-12 h-20 bg-white w-full sm:w-10/12 md:w-8/12 border-2 focus:bg-orange-500/10 focus:scale-95 transition duration-300 ease-in py-1 border-neutral-500/20 px-3 text-[14px] focus:outline-none rounded-[6px]"
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
          first_name.length < 3 || surname.length < 1 || alias.length < 3
        }
        className={`  text-white px-7 h-8 ${
          first_name.length < 3 || surname.length < 1 || alias.length < 3
            ? " bg-gray-500 w-full lg:w-3/12 lg:text-[12px] text-white mt-5 rounded-[4px] h-20 lg:h-8 brightness-[80%]"
            : "w-full cursor-pointer lg:w-3/12 lg:text-[12px] bg-cyan-500 text-white mt-5 rounded-[4px] h-20 lg:h-8"
        }`}
        onClick={() =>
          handleOnboarding(first_name, surname, alias, router, set_is_loading)
        }
      >
        Complete!
      </button>
    </div>
  );
};

export default OnboardingScreens;
