"use client";

import { loan_statuses, loan_types } from "@/enums";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const RepaymentsPage = () => {
  const [debts, set_debts] = useState<Tcommunity_requests[]>([]);

  const fetchDebts = async () => {
    try {
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      const { data: debts_data, error: debts_data_error } = await supabase
        .from("loans")
        .select("*")
        .eq("user_id", user_id)
        .eq("status", loan_statuses.PND)
        .eq("type", loan_types.OFR);

      if (debts_data_error) throw new Error(debts_data_error.message);
      set_debts(debts_data);
    } catch (error) {
      console.log("Unable to fetch debt data: ", error);
    }
  };

  useEffect(() => {
    fetchDebts();
  }, []);

  return <div className=" w-full min-h-screen ">RepaymentsPage</div>;
};

export default RepaymentsPage;
