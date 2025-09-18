import React from "react";

const WindmillBottom = () => {
  return (
    <div className=" w-full py-1 h-[35%] flex flex-col justify-end ">
      {/* <section className=" w-fit gap-5 flex justify-between items-center">
          <div className=" w-fit flex gap-1 items-center">
            <FaRegSnowflake size={10} className=" " />
            <div className=" flex flex-col items-center ">
              <p className=" text-[10px] ">3</p>
              <p className=" text-[8px]">Debt</p>
            </div>
            <div className=" text-[8px] font-bold">:</div>
            <div className=" flex flex-col items-center ">
              <p className=" text-[10px]">1</p>
              <p className=" text-[8px] ">Accrued Income</p>
            </div>
          </div>
          <div className=" w-fit flex gap-1 items-center">
            <FaSnowman size={10} className=" text-white" />
            <p className=" text-[8px]">Offers</p>
          </div>
        </section> */}
      <section className=" w-fit gap-5 flex justify-between items-center">
        <div className=" w-fit px-5 py-1 bg-neutral-600/10 text-white rounded-[8px]">
          <p className=" text-[20px] lg:text-[14px] text-white">21 Aug 2025</p>
        </div>
      </section>
    </div>
  );
};

export default WindmillBottom;
