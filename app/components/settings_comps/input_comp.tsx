import { I_input_comp } from "@/models/interfaces";
import React from "react";

const InputComp: React.FC<I_input_comp> = ({
  label,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className=" w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-fit flex flex-col items-center ">
      <label className=" text-[10px] " htmlFor={label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className=" w-full text-black bg-neutral-500/20 rounded-lg h-10 px-2 text-[10px] "
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputComp;
