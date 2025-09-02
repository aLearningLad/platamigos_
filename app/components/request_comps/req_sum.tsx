"use client";

import { I_req_sum } from "@/models/interfaces";
import { handleRequestLoan } from "@/pm_functions/request_loan";
import React from "react";
import PrevBtn from "./prev_btn";
import { plataStore } from "@/app/(store)/store";

const ReqSum: React.FC<I_req_sum> = ({
  alias,
  description,
  loan_type,
  pcp,
  router,
  set_is_loading,
  title,
  set_part,
}) => {
  const set_desc_is_done = plataStore((store) => store.set_desc_is_done);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center">
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

      <div className=" w-full flex justify-center items-center mt-12">
        <PrevBtn
          set_part={set_part}
          btn_color=""
          handleFxn={set_desc_is_done}
        />
      </div>
    </div>
  );
};

export default ReqSum;
