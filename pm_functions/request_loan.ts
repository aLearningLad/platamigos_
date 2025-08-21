"use client";

import { loan_statuses } from "@/enums";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { SetStateAction } from "react";

type NextRouter = ReturnType<typeof useRouter>;

export const handleRequestLoan = async (
  title: string,
  description: string,
  pcp: number,
  loan_type: string,
  router: NextRouter,
  set_is_loading: React.Dispatch<SetStateAction<boolean>>
) => {
  if (!title || !description || !pcp) {
    alert("Values are missing!");
    return;
  }
  try {
    set_is_loading(true);
    const supabase = await createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    const { error: loan_request_error } = await supabase.from("loans").insert({
      user_id: user_id,
      type: loan_type,
      pcp: pcp,
      description: description,
      title: title,
      status: loan_statuses.PND,
    });

    if (loan_request_error) throw new Error(loan_request_error.message);

    alert("Loan request submitted!");
    router.push("/dash");
  } catch (error) {
    alert("Something went wrong");
    console.log("Unable to request loan: ", error);
    set_is_loading(false);
  }
};
