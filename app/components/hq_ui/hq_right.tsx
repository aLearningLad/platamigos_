"use client";

import TopTab from "./top_tab";
import MiddleTab from "./middle_tab";
import BottomTab from "./bottom_tab";
import { hq_top_tab_info } from "@/dev_data/hq_top_tab_info";
import { hq_middle_tab_info } from "@/dev_data/hq_middle_tab_info";
import useSWR from "swr";
import { createClient } from "@/utils/supabase/client";
import lottieLoading from "@/public/assets/liquidloader.json";
import Lottie from "lottie-react";
import { hq_middle_tab_new_user_info } from "@/dev_data/hq_middle_tab_new_user_info";
import NewUserEmpty from "./new_user";
import toast from "react-hot-toast";

const HQRight = () => {
  const fetchCredit = async () => {
    const supabase = createClient();
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    try {
      const { data, error: credit_data_error } = await supabase
        .from("credit_scores")
        .select(
          "balance, score, debts_settled, total_creditors, total_debtors, loans_funded"
        )
        .eq("user_id", user_id);

      if (credit_data_error) throw new Error(credit_data_error.details);

      return data;
    } catch (error) {
      toast.error("Unable to fetch credit data");
      console.log("Unable to fetch credit data: ", error);
    }
  };

  const {
    data: credit_data,
    isLoading,
    error,
  } = useSWR("user-credit", fetchCredit);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen space-y-6 lg:w-1/2 lg:h-full flex flex-col justify-center items-center ">
        <Lottie
          animationData={lottieLoading}
          className=" w-32 h-32 lg:w-20 lg:h-20 "
        />
        <p className=" text-xl text-center lg:text-[10px] text-neutral-600 ">
          Just a moment...
        </p>
      </div>
    );
  }

  if (credit_data) {
    return (
      <div className=" w-full space-y-6 lg:w-1/2 h-[100vh] lg:h-full flex flex-col px-1 md:px-3 lg:px-8">
        {/* first two tabs */}

        <div className=" w-full lg:flex-row flex-col h-fit p-4 lg:p-0 flex lg:min-h-[25vh] gap-4 justify-center lg:gap-6 ">
          {hq_top_tab_info.map(
            (
              { animation, blurb, id, stat1, stat2, text1, text2, title },
              index
            ) => (
              <TopTab
                animation={animation}
                blurb={blurb}
                id={id}
                stat1={id === 1 ? credit_data[0].score : stat1}
                stat2={stat2}
                text1={text1}
                text2={text2}
                title={title}
                key={id}
              />
            )
          )}
        </div>

        {/* second two tabs */}
        <div className=" w-full flex lg:flex-row p-4 lg:p-0 flex-col min-h-[65vh] lg:min-h-[25vh] mt-5 lg:mt-0 gap-4 justify-center lg:gap-6 ">
          {hq_middle_tab_info.map(
            ({ animation, id, tab_text, tab_value }, index) => (
              <MiddleTab
                animation={animation}
                id={id}
                tab_text={tab_text}
                tab_value={
                  id === 3
                    ? credit_data[0].loans_funded
                    : `R${credit_data[0].balance}`
                }
                key={id}
              />
            )
          )}
        </div>

        {/* bottom single tab with info */}
        <BottomTab />
      </div>
    );
  }

  // user is new, hasn't done any transactions yet
  return <NewUserEmpty />;
};

export default HQRight;
