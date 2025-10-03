import { BsFillCompassFill } from "react-icons/bs";

const FooterPages = () => {
  return (
    <div className=" w-fit h-full hidden lg:flex flex-col items-start justify-around p-2 ">
      <span className=" w-full flex flex-row gap-1 items-center mb-2">
        <BsFillCompassFill size={14} color="white" />
        <p className=" text-[12px] font-semibold text-white ">Navigate</p>
      </span>
      <p className=" text-[10px] text-neutral-100">Home</p>
      <p className="text-[10px] text-neutral-100">About</p>
      <p className="text-[10px] text-neutral-100">Github</p>
      <p className="text-[10px] text-neutral-100">Shop</p>
    </div>
  );
};

export default FooterPages;
