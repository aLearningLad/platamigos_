import { I_snapshot } from "@/models/interfaces";
import { useRouter } from "next/navigation";
import { IoInformationCircle } from "react-icons/io5";

const Snapshot: React.FC<I_snapshot> = ({
  description,
  handleIsFunding,
  pcp,
  title,
}) => {
  const router = useRouter();

  return (
    <div className=" w-full min-h-screen flex-col justify-center items-center flex p-2 lg:p-0  ">
      <div className=" w-full p-6 md:p-4 lg:p-3 bg-purple-700/10 rounded-lg sm:w-10/12 md:w-8/12 lg:w-4/12 flex flex-col h-[75vh] md:h-[55%] lg:h-[40%]">
        <header className=" flex gap-1 items-center justify-start mb-2 ">
          <p className=" text-3xl lg:text-[22px] text-neutral-800 ">Overview</p>{" "}
          <IoInformationCircle size={12} />
        </header>
        <div className=" w-full flex justify-between items-center h-full py-1">
          <p className=" text-xl lg:text-[14px] text-neutral-800 ">
            Debtor is seeking a loan <br className=" hidden lg:block" /> to the
            value of
          </p>
          <h1 className=" text-4xl font-bold">R{pcp}</h1>
        </div>
        <span className=" w-full flex justify-between items-center">
          <p className=" text-xl lg:text-[12px] flex gap-1">
            Due @ 15% over 12 months
            <IoInformationCircle size={14} />
          </p>
          <p className=" text-3xl lg:text-[12px] font-semibold">
            R{pcp + pcp * (15 / 100) * 1}
          </p>
        </span>
        <div className=" w-full h-full mt-2 lg:mt-5 px-2 py-12 flex-col bg-slate-950 rounded-lg p-2 flex justify-between">
          <span className=" w-full flex justify-center items-center ">
            <p className=" text-lg lg:text-[18px] font-semibold text-white ">
              About
            </p>
          </span>
          <p className=" text-[16px] lg:text-[14px] text-white h-full flex items-center text-ellipsis text-center">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={handleIsFunding}
        className=" text-[16px] lg:text-[12px] w-full cursor-pointer sm:w-10/12 md:w-8/12 lg:w-2/12 hover:bg-black hover:scale-95 transition-all duration-200 ease-in-out bg-purple-950/40 text-white h-16 lg:h-10 flex justify-center items-center mt-5 rounded-[5px] "
      >
        Structure Deal
      </button>

      <button
        className=" text-[16px] lg:text-[12px] w-full cursor-pointer sm:w-10/12 md:w-8/12 lg:w-2/12 hover:bg-red-500 hover:scale-95 transition-all duration-200 ease-in-out bg-black text-white h-16 lg:h-10 flex justify-center items-center mt-5 rounded-[5px] "
        onClick={() => router.push("/fund")}
      >
        Return
      </button>
    </div>
  );
};

export default Snapshot;
