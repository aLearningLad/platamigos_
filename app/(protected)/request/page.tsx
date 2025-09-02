"use client";

import { loan_types } from "@/enums";
import { handleRequestLoan } from "@/pm_functions/request_loan";
import { createClient } from "@/utils/supabase/client";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  ChangeEventHandler,
  TextareaHTMLAttributes,
  useEffect,
  useState,
} from "react";
import loadingLottie from "@/public/assets/lottieloading.json";
import PCP from "@/app/components/request_comps/pcp";
import ReqTitle from "@/app/components/request_comps/req_title";
import ReqDesc from "@/app/components/request_comps/req_desc";
import { plataStore } from "@/app/(store)/store";
import { Istore } from "@/models/interfaces";
import ReqSum from "@/app/components/request_comps/req_sum";
import { req_trackers_info } from "@/dev_data/req_trackers_info";
import ProgressCircle from "@/app/components/request_comps/progress_circle";

const RequestALoanPage = () => {
  const [pcp, set_pcp] = useState<number>(1500);
  const [loan_type, set_loan_type] = useState<string>(loan_types.RQT);
  const [description, set_description] = useState<string>("");
  const [title, set_title] = useState<string>("");
  const [is_loading, set_is_loading] = useState(false);
  const [alias, set_alias] = useState<string>("");
  const [part, set_part] = useState<number>(0);

  useEffect(() => {
    const fetchAlias = async () => {
      try {
        const supabase = createClient();
        const user_id = (await supabase.auth.getUser()).data.user?.id;
        const { data: alias_data, error: alias_data_error } = await supabase
          .from("all_users")
          .select("alias")
          .eq("user_id", user_id);

        if (alias_data_error) throw new Error(alias_data_error.message);
        set_alias(alias_data[0].alias);
      } catch (error) {
        alert("Unable to fetch your alias");
        console.log("Unable to fetch user's alias");
      }
    };

    fetchAlias();
  }, []);

  const router = useRouter();
  const pcp_is_done = plataStore((store: Istore) => store.pcp_is_done);
  const title_is_done = plataStore((store: Istore) => store.title_is_done);
  const desc_is_done = plataStore((store: Istore) => store.desc_is_done);

  {
    return is_loading ? (
      <div className=" w-full min-h-screen flex flex-col justify-center items-center">
        <p className=" text-2xl lg:text-[14px]">Just a minute...</p>

        <p className=" text-xl lg:text-[12px] ">
          {"We're"} submitting your loan request
        </p>
        <Lottie animationData={loadingLottie} className=" w-40 h-40 " />
      </div>
    ) : (
      <div className=" w-full min-h-screen flex flex-col items-center justify-center space-y-5">
        <header className=" w-full lg:flex justify-center items-center gap-3">
          {req_trackers_info.map(
            ({ blurb, id, pending_icon, title, dependent_state }) => (
              <ProgressCircle
                blurb={blurb}
                dependent_state={dependent_state}
                id={id}
                pending_icon={pending_icon}
                title={title}
                key={id}
              />
            )
          )}
        </header>
        {/* conditional rendering below */}
        <div className=" w-full px-2 md:px-5 lg:px-32 flex justify-center items-center h-[70vh] lg:h-[50%] border-black border-2 ">
          {/* pcp */}
          {part === 0 && (
            <PCP pcp={pcp} set_pcp={set_pcp} set_part={set_part} />
          )}
          {/* title */}
          {part === 1 && (
            <ReqTitle set_title={set_title} title={title} set_part={set_part} />
          )}
          {/* description */}
          {part === 2 && (
            <ReqDesc
              description={description}
              set_description={set_description}
              set_part={set_part}
            />
          )}

          {part === 3 && (
            // summary & submit
            <ReqSum
              set_part={set_part}
              alias={alias}
              description={description}
              loan_type={loan_type}
              pcp={pcp}
              router={router}
              set_is_loading={set_is_loading}
              title={title}
            />
          )}
        </div>
      </div>
    );
  }
};

export default RequestALoanPage;
