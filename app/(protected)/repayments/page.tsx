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
import RepaymentCard from "@/app/components/repayments_ui/repayment_card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const RepaymentsPage = () => {
  const [debts, set_debts] = useState<Toffers[]>([]);
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [is_fetching_single, set_is_fetching_single] = useState<boolean>(false);
  const [is_model, set_is_modal] = useState<boolean>(false);
  const [user_info, set_user_info] = useState<Tuser_info>();

  const router = useRouter();

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

  // const handleRepayment = async (
  //   due: number,
  //   term: number,
  //   loan_id: string
  // ) => {
  //   const instalment = Math.floor(due / term);
  //   try {
  //     // balance is less than instalment amount
  //     if (user_info!.balance < instalment) {
  //       alert("You don't have enough funds to. Try borrowing more?");
  //       return;
  //     }

  //     const new_balance = user_info!.balance - instalment;
  //     const updated_creditors = user_info!.total_creditors - instalment;
  //     const supabase = createClient();
  //     const user_id = (await supabase.auth.getUser()).data.user?.id;

  //     // debt balance in credit scores
  //     const { error: balance_update_error } = await supabase
  //       .from("credit_scores")
  //       .update({
  //         balance: new_balance,
  //         total_creditors: updated_creditors,
  //       })
  //       .eq("user_id", user_id);

  //     if (balance_update_error) throw new Error(balance_update_error.message);

  //     // main balance in loans
  //     const { error: loan_update_error } = await supabase
  //       .from("loans")
  //       .update({
  //         due: new_balance,
  //       })
  //       .eq("loan_id", loan_id);

  //     alert(`R${instalment} paid to service debt`);
  //     set_is_modal(false);
  //     router.refresh();
  //     await fetchDebts();
  //   } catch (error) {
  //     console.log("Unable to make repayment: ", error);
  //   }
  // };

  const handleRepayment = async (
    due: number,
    term: number,
    loan_id: string
  ) => {
    const instalment = Math.floor(due / term);

    try {
      if (user_info!.balance < instalment) {
        toast.error("You don't have enough funds to make this repayment.");
        return;
      }

      const supabase = createClient();
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      if (!user_id) throw new Error("User not found");

      // update wallet balance (subtract instalment)
      const new_balance = user_info!.balance - instalment;
      const { error: balance_update_error } = await supabase
        .from("credit_scores")
        .update({ balance: new_balance })
        .eq("user_id", user_id);

      if (balance_update_error) throw new Error(balance_update_error.message);

      // update loan due (subtract instalment from loan, not balance)
      const new_due = due - instalment;
      const { error: loan_update_error } = await supabase
        .from("loans")
        .update({ due: new_due })
        .eq("loan_id", loan_id);

      if (loan_update_error) throw new Error(loan_update_error.message);

      toast.error(`R${instalment} paid toward your loan.`);
      set_is_modal(false);
      router.refresh();
      await fetchDebts();
    } catch (error) {
      console.log("Unable to make repayment: ", error);
    }
  };

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex justify-center items-center flex-col text-center p-3">
        Sit tight, {"we're"} fetching your debt information...
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
                <RepaymentCard
                  alias={alias}
                  description={description}
                  due={due}
                  index={index}
                  loan_id={loan_id}
                  pcp={pcp}
                  term={term}
                  title={title}
                  key={loan_id}
                  handleRepayment={() => handleRepayment(due, term, loan_id)}
                />
              )
            )}
          </div>
        ) : (
          <div className=" h-screen items-center justify-center text-center p-3 text-xl lg:h-full flex flex-col w-full">
            <p>You {"don't"} have any outstanding debts right now</p>
            <Link
              href={"/dash"}
              className=" mt-4 w-full lg:h-8 h-20 sm:w-8/12 md:w-6/12 lg:w-fit px-6 text-xl bg-black lg:text-[12px] flex justify-center items-center "
            >
              <p className=" text-white ">Return</p>
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default RepaymentsPage;
