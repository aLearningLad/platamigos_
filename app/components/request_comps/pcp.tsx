import { I_pcp } from "@/models/interfaces";
import React, { ChangeEvent } from "react";

const PCP: React.FC<I_pcp> = ({ pcp, set_pcp }) => {
  return (
    <div className=" flex flex-col gap-2 items-center">
      <label htmlFor="pcp">{"I'm"} asking for</label>
      <input
        name="pcp"
        className=" border-2 border-black"
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
    </div>
  );
};

export default PCP;
