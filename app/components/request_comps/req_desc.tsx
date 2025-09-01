import { I_req_desc } from "@/models/interfaces";
import React, { ChangeEvent } from "react";

const ReqDesc: React.FC<I_req_desc> = ({ description, set_description }) => {
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
    </div>
  );
};

export default ReqDesc;
