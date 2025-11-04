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
  const set_title_is_done = plataStore((store) => store.set_title_is_done);
  const set_pcp_is_done = plataStore((store) => store.set_pcp_is_done);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center">
      {/* submit request */}
      <button
        disabled={title.length < 2 || description.length < 5 || pcp === 0}
        onClick={() => {
          handleRequestLoan(
            title,
            description,
            pcp,
            loan_type,
            router,
            set_is_loading,
            alias
          ),
            set_desc_is_done();
          set_title_is_done();
          set_pcp_is_done();
        }}
        className=" text-white cursor-pointer bg-green-500 h-20 lg:h-12 rounded-[6px] w-full md:w-8/12 lg:w-3/12 px-12 flex justify-center items-center py-2 text-xl lg:text-[14px]"
      >
        Publish Request
      </button>

      <div className=" w-full flex justify-center items-center mt-3">
        <PrevBtn
          set_part={set_part}
          btn_color=""
          handleFxn={set_desc_is_done}
          disabler
        />
      </div>
    </div>
  );
};

export default ReqSum;
