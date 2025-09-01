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

  const handleNext = (): void => {
    if (part < 3) {
      set_part((prev: number) => prev + 1);
    }
    return;
  };
  const handlePrev = (): void => {
    if (part < 1) {
      return;
    }
    set_part((prev) => prev - 1);
  };

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
        <header>Make a loan request</header>
        {/* conditional rendering below */}
        {/* pcp */}
        {part === 0 && <PCP pcp={pcp} set_pcp={set_pcp} />}
        {/* title */}
        {part === 1 && (
          <div className=" flex flex-col items-center justify-center">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Eg. Need deposit for Porsche"
              className=" bg-gray-400/50 text-sm w-60 px-3 py-2"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set_title(e.target.value)
              }
            />
          </div>
        )}
        {/* description */}
        {part === 2 && (
          <div className=" flex flex-col items-center justify-center">
            <label htmlFor="description">Description</label>
            <textarea
              className=" min-h-[25vh] max-h-[40vh] overflow-auto p-4 bg-gray-500/40 "
              name="description"
              id="description"
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                set_description(e.target.value)
              }
            />
          </div>
        )}

        {part === 3 && (
          <div>
            summary & submit
            {/* submit request */}
            <button
              disabled={title.length < 5 || description.length < 5 || pcp === 0}
              onClick={() =>
                handleRequestLoan(
                  title,
                  description,
                  pcp,
                  loan_type,
                  router,
                  set_is_loading,
                  alias
                )
              }
              className={`${
                title.length < 5 || description.length < 5 || pcp === 0
                  ? "bg-gray-400/60 brightness-50 text-white/70 "
                  : "bg-green-400"
              }`}
            >
              Publish Request
            </button>
          </div>
        )}

        <button
          className={`${
            part === 0 && "brightness-[30%]"
          } bg-cyan-600 text-white`}
          onClick={handlePrev}
        >
          Return
        </button>
        <button
          className={`${
            part === 3 && "brightness-[30%]"
          } bg-green-400 text-white`}
          onClick={handleNext}
        >
          Next
        </button>
        <p>{part}</p>
      </div>
    );
  }
};

export default RequestALoanPage;
