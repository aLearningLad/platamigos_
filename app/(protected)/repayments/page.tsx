"use client";

import { loan_statuses, loan_types } from "@/enums";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const RepaymentsPage = () => {
  const [debts, set_debts] = useState<Toffers[]>([]);
  const [is_loading, set_is_loading] = useState<boolean>(false);

  const fetchDebts = async () => {
    try {
      set_is_loading(true);
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      const { data: debts_data, error: debts_data_error } = await supabase
        .from("loans")
        .select("*")
        .eq("debtor_id", user_id)
        .eq("status", loan_statuses.FND)
        .eq("type", loan_types.OFR);

      if (debts_data_error) throw new Error(debts_data_error.message);
      set_debts(debts_data);
      set_is_loading(false);
      console.log("debt data for this user: ", debts_data);
    } catch (error) {
      console.log("Unable to fetch debt data: ", error);
    }
  };

  useEffect(() => {
    fetchDebts();
  }, []);

  const handleRepayment = async () => {
    try {
    } catch (error) {
      console.log("Unable to make repayment: ", error);
    }
  };

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center flex-col">
        Sit tight, we're fetching your debt information...
      </div>
    ) : (
      <div className=" w-full min-h-screen flex flex-col items-center justify-center">
        {debts && debts.length > 0 ? (
          <div className=" w-full h-full flex flex-col items-center justify-center space-y-3">
            {debts.map((debt) => (
              <div className=" flex flex-col space-y-2 items-center justify-center bg-neutral-300 p-5 rounded-lg">
                <p>Funded by {debt.alias}</p>
                <p>{debt.title}</p>
                <p>You currently owe R{debt.due}</p>

                <div className=" w-full flex flex-col gap-3 mt-6">
                  <button
                    onClick={handleRepayment}
                    className=" w-full h-9 bg-green-500 text-white"
                  >
                    Make repayment
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=" w-full h-full flex flex-col"></div>
        )}
      </div>
    );
  }
};

export default RepaymentsPage;
