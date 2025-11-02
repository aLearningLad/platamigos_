"use client";

import { createClient } from "@/utils/supabase/client";
import Lottie from "lottie-react";
import useSWR from "swr";
import lottieLoading from "@/public/assets/lottieloading.json";
import { T_logs_data } from "@/models/types";
import { zar_currency } from "@/utils/utils";
import { GoClockFill } from "react-icons/go";

const Logs = () => {
  const fetchLog = async () => {
    const supabase = createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    try {
      const { data, error: logs_error } = await supabase
        .from("loans")
        .select("*")
        .eq("user_id", user_id);

      if (logs_error) throw new Error(logs_error.details);
      console.log("logs data here: ", logs_data);
      return data;
    } catch (error) {
      console.log("Unable to retrieve user's transactions: ", error);
    }
  };

  const { data: logs_data, isLoading, error } = useSWR("logs-data", fetchLog);

  if (isLoading) {
    <div className=" w-full h-[40%] flex flex-col items-start p-2 lg:p-4">
      <Lottie animationData={lottieLoading} className=" w-32 h-32 " />
      <p className=" text-[14px] text-neutral-600 ">Just a moment...</p>
    </div>;
  }

  // large screens table
  if (logs_data) {
    return (
      <div className=" w-full h-fit lg:h-[40%] bg-gradient-to-b from-pink-400/30 via-pink-300/30 to-transparent text-black rounded-xl flex flex-col items-start p-2 lg:p-4">
        <span className=" w-full hidden lg:flex justify-start gap-1 items-center">
          <p className=" text-[18px] font-semibold ">Recent Activity</p>
          <GoClockFill size={18} className=" text-slate-500" />
        </span>

        <table className=" w-full hidden lg:block text-black mt-5">
          <thead className=" h-5 ">
            <tr className="">
              <th className=" text-[14px] text-black italic font-normal border-b-[1px] border-neutral-400/40">
                Title
              </th>
              <th className=" text-[14px] text-black italic font-normal border-b-[1px] border-neutral-400/40">
                Desc
              </th>
              <th className=" text-[14px] text-black italic font-normal border-b-[1px] border-neutral-400/40">
                Amount
              </th>
              <th className=" text-[14px] text-black italic font-normal border-b-[1px] border-neutral-400/40">
                Type
              </th>
              <th className=" text-[14px] text-black italic font-normal border-b-[1px] border-neutral-400/40">
                Status
              </th>
            </tr>
          </thead>

          <tbody className=" mt-3">
            {logs_data.map((row: T_logs_data) => (
              <tr
                key={row.loan_id}
                className=" h-fit pb-2 px-1 rounded-lg w-full"
              >
                <td className=" w-3/12 border-b-[1px] border-neutral-400/40 px-1 ">
                  <p className=" text-[10px]  ">{row.title}</p>
                </td>
                <td className=" w-4/12 border-b-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[10px] ">{row.description}</p>
                </td>
                <td className=" w-2/12 border-b-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[10px] ">
                    {zar_currency.format(row.pcp)}
                  </p>
                </td>
                <td className=" w-2/12 border-b-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[12px] ">{row.type}</p>
                </td>
                <td className=" w-2/12 border-b-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[10px] ">{row.status}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Logs;
