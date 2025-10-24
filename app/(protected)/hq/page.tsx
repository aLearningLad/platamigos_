import HQHeader from "@/app/components/hq_ui/hq_header";
import HQLeft from "@/app/components/hq_ui/hq_left";
import HQRight from "@/app/components/hq_ui/hq_right";
import React from "react";

const HQ = () => {
  return (
    <div className=" max-h-fit lg:min-h-screen w-full flex flex-col relative bg-gradient-to-tr from-pink-400/10 via-cyan-500/10 to-orange-600/10">
      <HQHeader />
      <section className=" w-full h-full flex flex-col lg:flex-row bg-neutral-300/20 py-2 md:py-5 ">
        {/* left side */}
        <HQLeft />

        {/* right side */}
        <HQRight />
      </section>
    </div>
  );
};

export default HQ;
