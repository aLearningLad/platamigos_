import { I_req_title } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import PrevBtn from "./prev_btn";

const ReqTitle: React.FC<I_req_title> = ({
  set_title,
  title,
  set_part,
  set_title_done,
}) => {
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
      <PrevBtn
        btn_color=""
        set_part={set_part}
        set_which_done={set_title_done}
      />
    </div>
  );
};

export default ReqTitle;
