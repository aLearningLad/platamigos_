import { I_input_comp } from "@/models/interfaces";
import React from "react";

const InputComp: React.FC<I_input_comp> = ({
  label,
  onChange,
  placeholder,
  value,
  checker,
  passing_text,
  warning_text,
}) => {
  return (
    <div className=" w-full peer sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-fit flex flex-col items-center ">
      <label className=" text-[10px] " htmlFor={label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className=" w-full peer text-black bg-neutral-500/20 rounded-lg h-10 px-2 text-[10px] "
        onChange={onChange}
        value={value}
      />
      <p
        className={` text-[8px] text-center ${
          !checker ? "peer-focus:flex text-red-600 " : "hidden"
        }  `}
      >
        {warning_text}
      </p>
      <p
        className={` text-[8px] text-center ${
          checker ? "text-green-600" : "hidden"
        }  `}
      >
        {passing_text}
      </p>
    </div>
  );
};

export default InputComp;
