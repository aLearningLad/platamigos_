import { IoLocation } from "react-icons/io5";

const FooterAddress = () => {
  return (
    <div className=" w-fit h-full flex flex-col items-start justify-around p-2 ">
      <span className=" w-full flex flex-row gap-1 items-center mb-2">
        <IoLocation size={14} color="white" />
        <p className=" text-[12px] font-semibold text-white ">Paarl, WC</p>
      </span>
      <p className=" text-[10px] text-neutral-100">
        Currently headquarted <br /> in Paarl, WC.
      </p>
      <p className="text-[10px] text-neutral-100">2389 Peach Mill Ave.</p>
      <p className="text-[10px] text-neutral-100">Paarl, Western Cape 1002</p>
    </div>
  );
};

export default FooterAddress;
