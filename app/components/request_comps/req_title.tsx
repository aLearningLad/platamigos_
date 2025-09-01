"use client";

import { I_req_title } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import PrevBtn from "./prev_btn";
import { plataStore } from "@/app/(store)/store";
import NextBtn from "./next_btn";

const ReqTitle: React.FC<I_req_title> = ({ set_title, title, set_part }) => {
  const set_title_is_done = plataStore((store) => store.set_title_is_done);
  const set_pcp_is_done = plataStore((store) => store.set_pcp_is_done);

  return (
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
      <NextBtn btn_color="" handleFxn={set_title_is_done} set_part={set_part} />
      <PrevBtn btn_color="" set_part={set_part} handleFxn={set_pcp_is_done} />
    </div>
  );
};

export default ReqTitle;
