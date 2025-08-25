import React from "react";

const RightSide = () => {
  return (
    <div className=" w-full lg:w-5/12 lg:pl-6 pt-8 relative h-[40vh] lg:h-[55%] border-2 border-black ">
      {/* top block jutting in */}
      <div className=" bg-black absolute top-0 left-[35%] rounded-lg  h-[40%] w-3/12 "></div>
      {/* top block jutting in */}

      {/* main block */}
      <div className=" w-full lg:w-8/12 h-[80%] bg-neutral-300"></div>
      {/* main block */}

      {/* lower block jutting in */}
      <div className=" w-3/12 h-[50%] absolute bottom-0 bg-neutral-600 left-1 rounded-lg "></div>
      {/* lower block jutting in */}
    </div>
  );
};

export default RightSide;
