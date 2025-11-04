import { plataStore } from "@/app/(store)/store";
import { I_req_desc } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import NextBtn from "./next_btn";
import PrevBtn from "./prev_btn";

const ReqDesc: React.FC<I_req_desc> = ({
  description,
  set_description,
  set_part,
  disabler,
}) => {
  const set_desc_is_done = plataStore((store) => store.set_desc_is_done);
  const set_title_is_done = plataStore((store) => store.set_title_is_done);

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <label className=" text-xl lg:text-[18px] " htmlFor="description">
        Description
      </label>
      <textarea
        className=" w-full md:w-10/12 lg:w-6/12 min-h-[25vh] max-h-[40vh] overflow-auto p-4 lg:p-5 focus:border-none focus:scale-95 transition ease-in-out duration-300 bg-neutral-500/10 text-black text-xl lg:text-[12px] rounded-[6px]"
        name="description"
        id="description"
        placeholder="Add details relevent to your loan request..."
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          set_description(e.target.value)
        }
      />
      <div className=" w-full md:w-8/12 lg:w-6/12 flex mt-5 lg:mt-7 flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center ">
        <PrevBtn
          btn_color=""
          handleFxn={set_title_is_done}
          set_part={set_part}
          disabler
        />
        <NextBtn
          btn_color=""
          handleFxn={set_desc_is_done}
          set_part={set_part}
          disabler={disabler}
        />
      </div>
    </div>
  );
};

export default ReqDesc;
