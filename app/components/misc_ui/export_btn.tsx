"use client";

const ExportBtn = ({ cta }: { cta: string }) => {
  return (
    <button className=" w-full text-white lg:text-black bg-black group-hover:bg-black group-hover:text-white h-16 lg:h-6 text-[14px] lg:text-[10px] cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out lg:bg-neutral-500/10 rounded-[4px] font-bold ">
      {cta}
    </button>
  );
};

export default ExportBtn;
