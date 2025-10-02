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
    <div className=" w-full min-h-screen py-3 flex flex-col justify-center items-center px-3 lg:px-24 xl:px-32 ">
      <header className=" w-full flex justify-center mb-3 ">
        <p className=" text-xl lg:text-[12px] ">
          Configure your {"offer's"} terms{" "}
        </p>
      </header>
      <div className=" w-full md:w-10/12 lg:w-7/12 items-center justify-center flex flex-col lg:flex-row h-fit lg:h-[50vh] gap-2">
        {/* left/top */}
        <div className=" w-full h-1/2 lg:h-full flex flex-col justify-around gap-2 ">
          {/* pcp */}
          <div className=" w-full relative min-h-[25vh] max-h-fit lg:h-1/2 bg-slate-950 flex flex-col items-start p-2 rounded-lg ">
            <p className=" text-white text-xl lg:text-[8px]">
              Pinciple Investment
            </p>
            <span className=" flex w-full justify-between items-center">
              <p className=" text-lg lg:text-[10px] text-white ">
                {"You'd"} invest
              </p>

              <p className="text-3xl font-bold text-white">R{pcp}</p>
            </span>

            <button
              onClick={handleOfferToFund}
              className=" lg:w-fit px-3 h-14 w-5/12 lg:h-8 absolute hover:scale-95 transition-all duration-200 hover:bg-white hover:text-black cursor-pointer bg-green-600 bottom-3 right-2.5 text-[16px] lg:text-[10px] text-white rounded-[6px]"
            >
              Submit Offer
            </button>
            {/* <button
              className=" border-4 border-red-600"
              onClick={(e) => set_is_funding(false)}
            >
              Cancel
            </button> */}
          </div>
          {/* rate */}
          <div className="w-full h-1/2 bg-slate-950 flex flex-col items-start rounded-lg">
            <p className="text-white text-xl lg:text-[8px] p-2">
              Rate (%) of return
            </p>
            <div className=" w-full h-full  rounded-[5px] flex gap-2 lg:flex-row flex-col justify-between items-center p-2">
              <p className="text-white text-lg lg:text-[8px]">
                At {rate}% simple interest
              </p>
              <div className=" flex flex-col justify-center lg:items-end items-center w-full">
                <input
                  name="rate"
                  className=" bg-neutral-500/30 text-white lg:flex hidden w-fit px-5 h-8 rounded-[4px] text-[10px]"
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

                <div className=" w-full flex flex-row lg:hidden items-center">
                  <p className=" text-[16px] text-white italic mx-2 ">0</p>
                  <input
                    name="rate"
                    className=" bg-neutral-500/30 text-white lg:hidden flex w-full sm:w-10/12 md:w-7/12 px-5 h-8 rounded-[4px] text-[10px]"
                    type="range"
                    min={0}
                    max={30}
                    step={2}
                    defaultValue={12}
                    value={rate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      set_rate(e.target.valueAsNumber)
                    }
                  />
                  <p className=" text-[16px] text-white italic mx-2">30%</p>
                </div>
                <p className=" text-[12px] lg:text-[6px] text-yellow-200 ">
                  Adjust this
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right/bottom */}
        <div className=" w-full h-1/2 lg:h-full rounded-lg bg-slate-950 flex flex-col items-center justify-around p-2 ">
          {/* term */}
          <div className=" flex w-full justify-between lg:flex-row flex-col gap-2 items-center text-white">
            <label className=" text-lg lg:text-[8px]" htmlFor="term">
              Term (in months)
            </label>
            <div className=" hidden lg:flex flex-col items-center">
              <input
                name="term"
                className=" bg-neutral-500/30 text-white w-fit px-5 h-8 rounded-[4px] text-[10px]"
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
              <p className=" text-[6px] text-yellow-200 ">Adjust this</p>
            </div>

            {/* term for mobile */}
            <div className=" w-full flex flex-row lg:hidden items-center">
              <p className=" text-[16px] text-white italic mx-2 ">0</p>
              <input
                name="term"
                className=" bg-neutral-500/30 text-white lg:hidden flex w-full sm:w-10/12 md:w-7/12 px-5 h-8 rounded-[4px] text-[10px]"
                type="range"
                min={1}
                max={18}
                step={1}
                defaultValue={12}
                value={term}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  set_term(e.target.valueAsNumber)
                }
              />
              <p className=" text-[16px] text-white italic mx-2">18</p>
            </div>
          </div>
          {/* due */}
          <div className=" flex gap-2 items-center w-full text-white justify-between mb-2">
            <label className=" text-[14px] lg:text-[8px]" htmlFor="term">
              Accrued income will be
            </label>
            <div className="text-3xl text-white font-bold">R{due}</div>
          </div>
          {/* instalment */}
          <div className=" flex w-full bg-neutral-200/10 rounded-[6px] justify-between gap-2 items-center">
            <div className=" text-lg lg:text-[10px] text-center  p-2 w-full h-fit overflow-auto lg:text-start py-2 text-white ">
              You would recieve <b>R{instalment}</b> per month, for {term}{" "}
              {term >= 2 ? "months" : "month"}
            </div>
          </div>

          {/* offer valid from */}
          <div className=" w-full flex justify-between items-center ">
            <label
              className=" text-[14px] lg:text-[8px] text-white "
              htmlFor="due_from"
            >
              Offer valid from
            </label>
            <input
              className="bg-neutral-500/30 text-white w-fit px-5 h-8 rounded-[4px] text-[20px] lg:text-[10px]"
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
          <div className=" w-full flex items-center justify-between mt-2">
            <label
              className=" text-[14px] text-white lg:text-[8px] "
              htmlFor="due_by"
            >
              Offer valid until
            </label>
            <input
              className="bg-neutral-500/30 text-white w-fit px-5 h-8 rounded-[4px] text-[20px] lg:text-[10px]"
              type="date"
              value={due_by}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set_due_by(e.target.value)
              }
              name="due_by"
              id="due_by"
            />
          </div>
        </div>
      </div>
      <button
        className=" mt-5 cursor-pointer border-2 border-black hover:scale-95 hover:text-black hover:bg-transparent transition-all duration-200 ease-in-out w-full sm:w-10/12 md:w-8/12 lg:w-4/12 xl:w-fit xl:px-5 h-20 lg:h-10 bg-black text-white rounded-[6px]"
        onClick={(e) => set_is_funding(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Funding;
