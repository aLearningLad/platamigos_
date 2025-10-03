import { I_upgrade_card } from "@/models/interfaces";
import React from "react";
import { GiStarProminences } from "react-icons/gi";

const UpgradeCard: React.FC<I_upgrade_card> = ({
  features,
  icon,
  id,
  index,
  price,
  title,
}) => {
  return (
    <div
      className={`w-full lg:w-1/3 ${
        index === 1 && "bg-black h-full text-white"
      } ${
        index == 0 &&
        "h-[95%] bg-orange-600/70 lg:bg-orange-600/10 text-white lg:text-black"
      } ${
        index === 2 && "h-[95%] bg-white lg:bg-teal-600/10 text-black"
      } rounded-3xl hover:scale-95 transition-all duration-200 ease-in-out flex flex-col items-start p-3`}
    >
      <p className=" text-[18px] lg:text-[12px] italic">{title}</p>
      <div className=" w-full flex ">
        <span>
          <p className=" text-4xl lg:text-[18px]">R{price}</p>
        </span>
        <span className=" flex flex-col items-start justify-center pl-2">
          <p className=" text-[16px] lg:text-[8px] ">Per month</p>
          <p className=" text-[14px] lg:text-[6px] ">discounts available</p>
        </span>
      </div>
      <div className=" w-[20px] h-[2px] border-b-2 border-white rounded-full mt-6 " />
      <div className=" w-full h-full flex flex-col items-start justify-around py-2">
        {features.map((feature) => (
          <div className=" w-full h-fit py-2 flex items-center">
            {icon}
            <p className=" text-[16px] lg:text-[8px] ">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradeCard;
