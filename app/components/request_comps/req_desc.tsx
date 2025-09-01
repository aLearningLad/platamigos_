import { plataStore } from "@/app/(store)/store";
import { I_req_desc } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import NextBtn from "./next_btn";
import PrevBtn from "./prev_btn";

const ReqDesc: React.FC<I_req_desc> = ({
  description,
  set_description,
  set_part,
}) => {
  const set_desc_is_done = plataStore((store) => store.set_desc_is_done);
  const set_title_is_done = plataStore((store) => store.set_title_is_done);

  return (
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

      <NextBtn btn_color="" handleFxn={set_desc_is_done} set_part={set_part} />
      <PrevBtn btn_color="" handleFxn={set_title_is_done} set_part={set_part} />
    </div>
  );
};

export default ReqDesc;
