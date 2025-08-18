// remember to revert back to server rendered page, with client components and animations

"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const handleOnboarding = async (
  first_name: string,
  surname: string,
  alias: string,
  router: NextRouter
) => {
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
    alert("Onboarding failed. Please try again");
    console.log("Onboarding has failed. Here's why: ", e);
    return;
  }
};

function showTime() {
  const date = new Date();
  const time = date.toTimeString();
  return time;
}

const OnboardingPage = () => {
  const [first_name, set_first_name] = useState<string>("");
  const [surname, set_surname] = useState<string>("");
  const [alias, set_alias] = useState<string>("");
  const router = useRouter();

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
        onClick={() => handleOnboarding(first_name, surname, alias, router)}
      >
        Complete!
      </button>
    </div>
  );
};

export default OnboardingPage;
