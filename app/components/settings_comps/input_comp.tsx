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
    <div className=" w-full peer sm:w-10/12 h-fit flex flex-col items-center ">
      <label className=" text-[12px] text-white mb-1 " htmlFor={label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className=" w-full focus:border-none outline-none focus:scale-95 peer h-12 placeholder:text-neutral-800 focus:placeholder:text-neutral-700 bg-white transition-all duration-200 ease-in-out text-black rounded-lg px-2 text-[12px] "
        onChange={onChange}
        value={value}
      />
      <p
        className={` text-[12px] text-center ${
          !checker ? "peer-focus:flex text-yellow-400 " : "hidden"
        }  `}
      >
        {warning_text}
      </p>
      <p
        className={` text-[12px] text-center ${
          checker ? "text-green-600" : "hidden"
        }  `}
      >
        {passing_text}
      </p>
    </div>
  );
};

export default InputComp;
