import { FaPhoneVolume } from "react-icons/fa6";

const FooterSupport = () => {
  return (
    <div className=" w-fit h-full flex flex-col items-start justify-around p-2 ">
      <span className=" w-full flex flex-row gap-1 items-center mb-2">
        <FaPhoneVolume size={14} color="white" />
        <p className=" text-[12px] font-semibold text-white ">Support</p>
      </span>
      <p className=" text-[10px] text-neutral-100">{"FAQ's"}</p>
      <p className="text-[10px] text-neutral-100">Support Center</p>
      <p className="text-[10px] text-neutral-100">Security</p>
    </div>
  );
};

export default FooterSupport;
