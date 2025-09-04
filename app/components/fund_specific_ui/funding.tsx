import { I_funding } from "@/models/interfaces";
import React, { ChangeEvent } from "react";

const Funding: React.FC<I_funding> = ({
  due,
  due_by,
  due_from,
  handleOfferToFund,
  instalment,
  pcp,
  rate,
  set_due_by,
  set_due_from,
  set_is_funding,
  set_rate,
  set_term,
  term,
}) => {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center flex-col gap-5 ">
      {/* pcp */}
      <div className=" w-full flex justify-center items-center flex-col ">
        <h3>
          {"You'd"} invest R{pcp}
        </h3>
      </div>

      {/* rate */}
      <div className=" flex flex-col gap-2 items-center">
        <label htmlFor="rate">Interest {"%"}</label>
        <input
          name="rate"
          className=" border-2 border-black"
          type="number"
          min={0}
          max={30}
          step={2}
          defaultValue={12}
          value={rate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_rate(e.target.valueAsNumber)
          }
        />
      </div>

      {/* term */}
      <div className=" flex flex-col gap-2 items-center">
        <label htmlFor="term">Term</label>
        <input
          name="term"
          className=" border-2 border-black"
          type="number"
          min={1}
          max={18}
          step={1}
          defaultValue={6}
          value={term}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_term(e.target.valueAsNumber)
          }
        />
      </div>

      {/* due */}
      <div className=" flex flex-col gap-2 items-center">
        <label htmlFor="term">Due</label>
        <div>{due}</div>
      </div>

      {/* instalment */}
      <div className=" flex flex-col gap-2 items-center">
        <label htmlFor="term">
          You would recieve <b>R{instalment}</b> per month, for {term}{" "}
          {term >= 2 ? "months" : "month"}
        </label>
      </div>

      {/* offer valid from */}
      <div className=" w-full flex flex-col items-center justify-center ">
        <label htmlFor="due_from">Offer valid from</label>
        <input
          type="date"
          value={due_from}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_due_from(e.target.value)
          }
          name="due_from"
          id="due_from"
        />
      </div>

      {/* offer valid until */}
      <div className=" w-full flex flex-col items-center justify-center ">
        <label htmlFor="due_by">Offer valid until</label>
        <input
          type="date"
          value={due_by}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            set_due_by(e.target.value)
          }
          name="due_by"
          id="due_by"
        />
      </div>

      <button
        onClick={handleOfferToFund}
        className=" w-fit px-8 h-8 bg-green-500 text-white rounded-lg"
      >
        Offer to Fund
      </button>
      <button onClick={(e) => set_is_funding(false)}>Cancel</button>
    </div>
  );
};

export default Funding;
