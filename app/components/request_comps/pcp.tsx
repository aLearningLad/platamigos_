"use client";

import { I_pcp, Istore } from "@/models/interfaces";
import React, { ChangeEvent } from "react";
import NextBtn from "./next_btn";
import { plataStore } from "@/app/(store)/store";

const PCP: React.FC<I_pcp> = ({ pcp, set_pcp, set_part, disabler }) => {
  const set_pcp_done = plataStore((store) => store.set_pcp_is_done);

  return (
    <div className=" w-full flex flex-col gap-2 items-center">
      <label className=" text-2xl lg:text-[14px] font-semibold" htmlFor="pcp">
        {"I'm"} asking for
      </label>

      {/* desktop input */}
      <input
        name="pcp"
        className="w-full hidden lg:flex md:w-10/12 lg:w-6/12 h-20 lg:h-8 focus:border-none focus:scale-95 transition ease-in-out duration-300 bg-neutral-500/10 text-black text-[12px] rounded-[6px] px-2 py-1 "
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

      {/* mobile input */}
      <div className=" w-full px-1 flex justify-center items-center">
        <p className=" text-[20px] italic mx-2">R0</p>
        <input
          type="range"
          className=" w-full"
          min={0}
          max={49500}
          step={1500}
        />
        <p className=" text-[20px] italic mx-2">R{"49,500"}</p>
      </div>
      <p className=" text-xl lg:text-[10px] text-neutral-500 mb-12">
        You can request up to R49,500
      </p>

      <NextBtn
        btn_color=""
        set_part={set_part}
        handleFxn={set_pcp_done}
        disabler={disabler}
      />
    </div>
  );
};

export default PCP;
