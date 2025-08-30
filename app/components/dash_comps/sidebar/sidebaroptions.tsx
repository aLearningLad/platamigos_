import { optionsInfo } from "@/dev_data/optionsinfo";
import { sidebarinfo } from "@/dev_data/sidebarinfo";
import React from "react";

const SidebarOptions = () => {
  return (
    <div className=" w-full h-[35%] flex flex-col items-start justify-end">
      {optionsInfo.map(({ icon, id, title }) => (
        <button
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
