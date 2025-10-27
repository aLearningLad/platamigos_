import React from "react";
import BottomTab from "./bottom_tab";
import { hq_middle_tab_new_user_info } from "@/dev_data/hq_middle_tab_new_user_info";
import MiddleTab from "./middle_tab";
import TopTab from "./top_tab";
import { hq_top_tab_new_user_info } from "@/dev_data/hq_top_tab_new_user_info";

const NewUserEmpty = () => {
  return (
    <div className=" w-full space-y-6 lg:w-1/2 h-[60vh] lg:h-full flex flex-col px-1 md:px-3 lg:px-8">
      {/* first two tabs */}

      <div className=" w-full flex min-h-[25vh] justify-center lg:gap-6 ">
        {hq_top_tab_new_user_info.map(
          (
            { animation, blurb, id, stat1, stat2, text1, text2, title },
            index
          ) => (
            <TopTab
              animation={animation}
              blurb={blurb}
              id={id}
              stat1={stat1}
              stat2={stat2}
              text1={text1}
              text2={text2}
              title={title}
              key={id}
            />
          )
        )}
      </div>

      {/* second two tabs */}
      <div className=" w-full flex min-h-[25vh] justify-center lg:gap-6 ">
        {hq_middle_tab_new_user_info.map(
          ({ animation, id, tab_text, tab_value }, index) => (
            <MiddleTab
              animation={animation}
              id={id}
              tab_text={tab_text}
              tab_value={tab_value as string}
              key={id}
            />
          )
        )}
      </div>

      {/* bottom single tab with info */}
      <BottomTab />
    </div>
  );
};

export default NewUserEmpty;
