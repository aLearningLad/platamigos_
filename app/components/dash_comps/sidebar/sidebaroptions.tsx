"use client";

import { optionsInfo } from "@/dev_data/optionsinfo";
import { sidebarinfo } from "@/dev_data/sidebarinfo";
import React, { useState } from "react";
import Upgrade from "../sidebar_modals/upgrade";
import Feedback from "../sidebar_modals/feedback";
import { useRouter } from "next/navigation";

const SidebarOptions = () => {
  const [is_upgrade, set_is_upgrade] = useState<boolean>(false);
  const [is_feedback, set_is_feedback] = useState<boolean>(false);
  const router = useRouter();

  if (is_upgrade) {
    return <Upgrade set_is_upgrade={set_is_upgrade} is_upgrade={is_upgrade} />;
  }

  if (is_feedback) {
    return (
      <Feedback is_feedback={is_feedback} set_is_feedback={set_is_feedback} />
    );
  }

  return (
    <div className=" w-full h-[35%] flex flex-col items-start justify-end">
      {optionsInfo.map(({ icon, id, title }) => (
        <button
          onClick={() => {
            id === 378713 && set_is_upgrade(true);
            id === 36027217 && set_is_feedback(true);
            id === 7461198371 &&
              router.push("https://github.com/aLearningLad/platamigos_");
          }}
          className="px-2 cursor-pointer py-1 gap-1 h-8 w-full flex hover:translate-x-1 hover:font-bold transition duration-300 ease-in-out"
          key={id}
        >
          {icon}
          <p
            className={`text-[10px] ${
              id === 378713 && " text-purple-500 font-bold "
            } `}
          >
            {title}
          </p>
        </button>
      ))}
    </div>
  );
};

export default SidebarOptions;
