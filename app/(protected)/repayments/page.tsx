"use client";

import { loan_statuses, loan_types } from "@/enums";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toffers, Tuser_info } from "@/models/types";
import { FaUser } from "react-icons/fa";

const RepaymentsPage = () => {
  const [debts, set_debts] = useState<Toffers[]>([]);
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [is_fetching_single, set_is_fetching_single] = useState<boolean>(false);
  const [is_model, set_is_modal] = useState<boolean>(false);
  const [user_info, set_user_info] = useState<Tuser_info>();

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

  const fetchUserDetails = async () => {
    try {
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      const { data: user_data, error: user_data_error } = await supabase
        .from("credit_scores")
        .select("*")
        .eq("user_id", user_id);

      if (user_data_error) throw new Error(user_data_error.message);
      set_user_info(user_data[0]);
    } catch (error) {
      console.log("Unable to fetch user details: ", error);
    }
  };

  useEffect(() => {
    fetchDebts();
    fetchUserDetails();
  }, []);

  const handleRepayment = async (
    due: number,
    term: number,
    loan_id: string
  ) => {
    const instalment = Math.floor(due / term);
    try {
      // balance is less than instalment amount
      if (user_info!.balance < instalment) {
        alert("You don't have enough funds to. Try borrowing more?");
        return;
      }

      const new_balance = user_info!.balance - instalment;
      const updated_creditors = user_info!.total_creditors - instalment;
      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;

      // debt balance in credit scores
      const { error: balance_update_error } = await supabase
        .from("credit_scores")
        .update({
          balance: new_balance,
          total_creditors: updated_creditors,
        })
        .eq("user_id", user_id);

      if (balance_update_error) throw new Error(balance_update_error.message);

      // main balance in loans
      const { error: loan_update_error } = await supabase
        .from("loans")
        .update({
          due: new_balance,
        })
        .eq("loan_id", loan_id);

      alert(`R${instalment} paid to service debt`);
      set_is_modal(false);
      await fetchDebts();
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
          // <div className=" w-full h-full flex flex-col items-center justify-center space-y-3">
          //   {debts.map((debt) => (
          //     <div
          //       key={debt.loan_id}
          //       className=" flex flex-col space-y-2 items-center justify-center bg-neutral-300 p-5 rounded-lg"
          //     >
          //       <p>Funded by {debt.alias}</p>
          //       <p>{debt.title}</p>
          //       <p>You currently owe R{debt.due}</p>

          //       <div className=" w-full flex flex-col gap-3 mt-6">
          //         <button
          //           onClick={(e) => set_is_modal(true)}
          //           className=" w-full h-9 bg-green-500 text-white"
          //         >
          //           Make repayment
          //         </button>
          //       </div>
          //       <Dialog
          //         open={is_model}
          //         onOpenChange={(e) => set_is_modal(false)}
          //       >
          //         <DialogContent>
          //           <DialogHeader>
          //             <DialogTitle>{debt.title}</DialogTitle>
          //             <DialogDescription>
          //               This action cannot be undone. This will permanently
          //               delete your account and remove your data from our
          //               servers.
          //             </DialogDescription>
          //           </DialogHeader>
          //           {/* <button onClick={(e) => set_is_modal(false)}>Close</button> */}
          //           <div className=" w-full flex flex-col space-y-3 justify-center items-center ">
          //             <button
          //               onClick={() =>
          //                 handleRepayment(debt.due, debt.term, debt.loan_id)
          //               }
          //               className=" w-1/2 h-8 bg-green-500 text-white rounded-lg text-[12px]"
          //             >
          //               Make Instalment of R{Math.floor(debt.due / debt.term)}
          //             </button>
          //             <button className=" w-6/12 h-8 bg-black text-white rounded-lg text-[12px]">
          //               Borrow More
          //             </button>
          //           </div>
          //         </DialogContent>
          //       </Dialog>
          //     </div>
          //   ))}
          // </div>

          <div className="bg-neutral-400/10 rounded-lg flex overflow-auto flex-wrap justify-center items-center w-full h-[75vh]">
            {debts.map(
              (
                {
                  alias,
                  created_at,
                  creditor_id,
                  description,
                  due,
                  due_by,
                  due_from,
                  loan_id,
                  pcp,
                  term,
                  title,
                },
                index
              ) => (
                <div
                  key={loan_id}
                  className={`min-w-[20vw] max-w-[20vw] ${
                    index % 2 === 0
                      ? "bg-slate-950 text-white"
                      : "bg-slate-500/20"
                  } min-h-[55vh] rounded-lg flex flex-col p-3 items-center justify-around m-2 `}
                >
                  {/* details */}
                  <div className=" w-full min-h-[10vh] flex flex-col items-center text-center ">
                    <p className="text-[12px] text-ellipsis ">{title}</p>
                    <p className="text-[8px] text-ellipsis ">{description}</p>
                  </div>

                  <div className=" w-full h-[2px] bg-white rounded-lg " />

                  {/* creditor */}
                  <span className=" w-full flex justify-between items-center">
                    <p className="text-[10px]">Funded by</p>
                    <p className="text-[10px] flex gap-1">
                      <FaUser size={10} />
                      {alias}
                    </p>
                  </span>

                  {/* pcp */}
                  <span className=" w-full flex justify-between items-center">
                    <p className="text-[10px]">Amount funded</p>
                    <p className="text-[10px] flex gap-1">R{pcp}</p>
                  </span>

                  {/* owing */}
                  <span className=" w-full flex justify-between items-center">
                    <p className="text-[10px]">Remaining debt</p>
                    <p className="text-2xl flex gap-1">R{due - pcp}</p>
                  </span>

                  <button className=" w-full hover:scale-95 transition-all duration-200 ease-in-out cursor-pointer hover:bg-cyan-500 group h-8 rounded-[6px] bg-green-500 text-white text-[10px] flex justify-center items-center ">
                    <p className=" flex group-hover:hidden">
                      Pay R{Math.floor(due / term)}
                    </p>
                    <p className=" hidden group-hover:flex">
                      Service this debt
                    </p>
                  </button>
                </div>
              )
            )}
          </div>
        ) : (
          <div className=" w-full h-full flex flex-col">
            Nobody has offered to fund you yet
          </div>
        )}
      </div>
    );
  }
};

export default RepaymentsPage;
