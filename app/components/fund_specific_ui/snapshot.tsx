import { I_snapshot } from "@/models/interfaces";
import React from "react";

const Snapshot: React.FC<I_snapshot> = ({
  description,
  handleIsFunding,
  pcp,
  title,
}) => {
  return (
    <div className=" w-full min-h-screen justify-center items-center flex flex-col">
      <p>This debtor is asking for R{pcp} </p>
      <div className=" w-full flex flex-col items-center justify-center space-y-5 "></div>
      <p>{title}</p>
      <p>{description}</p>
      <button
        onClick={handleIsFunding}
        className=" bg-cyan-600 mt-4 text-white w-fit px-7 h-8 rounded-[6px]"
      >
        Fund This
      </button>
    </div>
  );
};

export default Snapshot;
