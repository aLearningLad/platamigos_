import React from "react";

const RightSide = () => {
  return (
    <div className=" w-full lg:w-5/12 lg:pl-6 pt-8 items-center flex relative h-[40vh] lg:h-[55vh] border-2 border-black ">
      {/* top block jutting in */}
      <div className=" bg-black absolute top-0 left-[23%] rounded-lg  h-[50%] w-3/12 "></div>
      {/* top block jutting in */}

      {/* main block */}
      <div className=" w-full lg:w-[55%] h-[70%] bg-neutral-300 rounded-lg "></div>
      {/* main block */}

      {/* lower block jutting in */}
      <div className=" w-3/12 h-[40%] absolute bottom-0 bg-neutral-600 left-1 rounded-lg "></div>
      {/* lower block jutting in */}
    </div>
  );
};

export default RightSide;
