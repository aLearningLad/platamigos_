import React from "react";
import Windmill from "./windmill";
import Logs from "./logs";

const HQLeft = () => {
  return (
    <div className=" w-full lg:w-6/12 h-[70vh] lg:h-full hidden lg:flex gap-5 flex-col items-center px-1 sm:px-2 md:px-5 lg:px-8 ">
      {/* windmill */}
      <Windmill />

      {/* logs */}
      <Logs />
    </div>
  );
};

export default HQLeft;
