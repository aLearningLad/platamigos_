import React from "react";
import TopTab from "./top_tab";
import MiddleTab from "./middle_tab";
import BottomTab from "./bottom_tab";

const HQRight = () => {
  return (
    <div className=" w-full space-y-6 lg:w-1/2 h-[60vh] lg:h-full bg-yellow-200 flex flex-col px-1 md:px-3 lg:px-8">
      {/* first two tabs */}

      <div className=" w-full flex h-[25vh] justify-center lg:gap-6 ">
        <TopTab />
        <TopTab />
      </div>

      {/* second two tabs */}
      <div className=" w-full flex h-[25vh] justify-center lg:gap-6 ">
        <MiddleTab />
        <MiddleTab />
      </div>

      {/* bottom single tab with info */}
      <BottomTab />
    </div>
  );
};

export default HQRight;
