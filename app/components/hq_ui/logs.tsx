"use client";

import { createClient } from "@/utils/supabase/client";
import Lottie from "lottie-react";
import useSWR from "swr";
import lottieLoading from "@/public/assets/lottieloading.json";
import { T_logs_data } from "@/models/types";
import { zar_currency } from "@/utils/utils";

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
      <Lottie animationData={lottieLoading} className=" w-20 h-20 " />
      <p className=" text-[10px] text-neutral-600 ">Just a moment...</p>
    </div>;
  }

  // large screens table
  if (logs_data) {
    return (
      <div className=" w-full h-fit lg:h-[40%] bg-slate-600/10 text-black rounded-xl flex flex-col items-start p-2 lg:p-4">
        <span className=" w-full hidden lg:flex justify-between items-center">
          <p className=" text-[10px] font-semibold ">Recent Activity</p>

          {/* <div className=" w-fit px-3 flex items-center text-[8px] gap-2 border-[2px] border-neutral-500/20 bg-neutral-300/10 rounded-[12px] py-1">
            <button className=" text-neutral-500 cursor-pointer ">
              Offers
            </button>
            <button className=" text-neutral-500 cursor-pointer">
              Requests
            </button>
            <button className=" text-neutral-500 cursor-pointer">Funded</button>
          </div> */}
        </span>

        <table className=" w-full hidden lg:block text-black">
          <thead className=" h-5 border-2 border-neutral-600">
            <tr className="">
              <th className=" text-[8px] text-black italic font-normal border-l-[1px] border-neutral-400/40">
                Title
              </th>
              <th className=" text-[8px] text-black italic font-normal border-l-[1px] border-neutral-400/40">
                Desc
              </th>
              <th className=" text-[8px] text-black italic font-normal border-l-[1px] border-neutral-400/40">
                Amount
              </th>
              <th className=" text-[8px] text-black italic font-normal border-l-[1px] border-neutral-400/40">
                Type
              </th>
              <th className=" text-[8px] text-black italic font-normal border-l-[1px] border-neutral-400/40">
                Status
              </th>
            </tr>
          </thead>

          <tbody className=" mt-3">
            {logs_data.map((row: T_logs_data) => (
              <tr
                key={row.loan_id}
                className=" h-fit border-2 border-neutral-600 pb-2 px-1 hover:bg-black hover:text-white w-full"
              >
                <td className=" w-3/12 border-l-[1px] border-neutral-400/40 px-1 ">
                  <p className=" text-[8px] ">{row.title}</p>
                </td>
                <td className=" w-4/12 border-l-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[8px] ">{row.description}</p>
                </td>
                <td className=" w-2/12 border-l-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[8px] ">{zar_currency.format(row.pcp)}</p>
                </td>
                <td className=" w-2/12 border-l-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[8px] ">{row.type}</p>
                </td>
                <td className=" w-2/12 border-l-[1px] border-neutral-400/40 px-1">
                  <p className=" text-[8px] ">{row.status}</p>
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
