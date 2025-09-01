import { I_pcp } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import NextBtn from "./next_btn";

const PCP: React.FC<I_pcp> = ({ pcp, set_pcp, set_part, set_pcp_done }) => {
  return (
    <div className=" w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 lg:px-20 flex flex-col gap-2 items-center">
      <label className=" text-[14px] font-semibold" htmlFor="pcp">
        {"I'm"} asking for
      </label>
      <input
        name="pcp"
        className=" w-full h-12 lg:h-8 focus:border-none focus:scale-95 transition ease-in-out duration-300 bg-neutral-500/10 text-black text-[12px] rounded-[6px] px-2 py-1 "
        type="number"
        min={0}
        max={50000}
        step={1500}
        // defaultValue={1500}
        value={pcp}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          set_pcp(e.target.valueAsNumber)
        }
      />
      <p className=" text-[10px] text-neutral-500 mb-12">
        You can request up to R49,500
      </p>

      <NextBtn btn_color="" set_part={set_part} set_which_done={set_pcp_done} />
    </div>
  );
};

export default PCP;
