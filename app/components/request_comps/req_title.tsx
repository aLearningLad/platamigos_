"use client";

import { I_req_title } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import PrevBtn from "./prev_btn";
import { plataStore } from "@/app/(store)/store";
import NextBtn from "./next_btn";

const ReqTitle: React.FC<I_req_title> = ({
  set_title,
  title,
  set_part,
  disabler,
}) => {
  const set_title_is_done = plataStore((store) => store.set_title_is_done);
  const set_pcp_is_done = plataStore((store) => store.set_pcp_is_done);

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <label className=" lg:text-[14px] text-xl" htmlFor="title">
        Title
      </label>
      <input
        type="text"
        name="title"
        placeholder="Eg. Need deposit for Porsche"
        className="w-full md:w-10/12 lg:w-6/12 h-20 lg:h-8 focus:border-none focus:scale-95 transition ease-in-out duration-300 bg-neutral-500/10 text-black text-xl lg:text-[12px] rounded-[6px] px-2 py-1 "
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_title(e.target.value)
        }
      />
      <div className=" w-full md:w-8/12 lg:w-6/12 flex mt-5 lg:mt-7 flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center ">
        <PrevBtn
          btn_color=""
          set_part={set_part}
          handleFxn={set_pcp_is_done}
          disabler
        />
        <NextBtn
          btn_color=""
          handleFxn={set_title_is_done}
          set_part={set_part}
          disabler={disabler}
        />
      </div>
    </div>
  );
};

export default ReqTitle;
