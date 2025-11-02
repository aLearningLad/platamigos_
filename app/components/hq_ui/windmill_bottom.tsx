import React from "react";

const WindmillBottom = () => {
  const date = new Date();
  const today = date.toDateString();

  return (
    <div className=" w-full py-1 h-[35%] flex flex-col justify-end ">
      <section className=" w-fit gap-5 flex justify-between items-center">
        <div className=" w-fit px-5 py-1 bg-orange-500/30 mt-10 text-white rounded-[8px]">
          <p className=" text-[20px] lg:text-[14px] text-white">{today}</p>
        </div>
      </section>
    </div>
  );
};

export default WindmillBottom;
