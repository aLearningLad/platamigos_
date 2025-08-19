"use client";

import { loan_types } from "@/enums";
import {
  ChangeEvent,
  ChangeEventHandler,
  TextareaHTMLAttributes,
  useState,
} from "react";

const RequestALoanPage = () => {
  const [pcp, set_pcp] = useState<number>(0);
  const [loan_type, set_loan_type] = useState<string>(loan_types.RQT);
  const [description, set_description] = useState<string>("");
  const [title, set_title] = useState<string>();

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center space-y-5">
      {/* pcp */}
      <div className=" flex flex-col gap-2 items-center">
        <label htmlFor="pcp">{"I'm"} asking for</label>
        <input
          name="pcp"
          className=" border-2 border-black"
          type="number"
          min={0}
          max={50000}
          step={1500}
          defaultValue={1500}
          value={pcp}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_pcp(e.target.valueAsNumber)
          }
        />
      </div>

      {/* title */}
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
      </div>

      {/* description */}
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
    </div>
  );
};

export default RequestALoanPage;
