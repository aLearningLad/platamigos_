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
    <div className=" w-full min-h-screen flex-col justify-center items-center flex ">
      <div className=" w-full p-1 lg:p-3 bg-purple-700/10 rounded-lg sm:w-10/12 md:w-8/12 lg:w-4/12 flex flex-col h-[60%] md:h-[55%] lg:h-[40%]">
        <header className=" flex gap-1 items-center justify-start mb-2 ">
          <p className=" text-[10px] text-neutral-800 ">Overview</p>{" "}
          <IoInformationCircle size={12} />
        </header>
        <div className=" w-full flex justify-between items-center h-full py-1">
          <p className=" text-[12px] text-neutral-800 ">
            Debtor is seeking a loan <br /> to the value of
          </p>
          <h1 className=" text-3xl font-bold">R{pcp}</h1>
        </div>
        <span className=" w-full flex justify-between items-center">
          <p className=" text-[10px] flex gap-1">
            Due @ 15% over 12 months
            <IoInformationCircle size={12} />
          </p>
          <p className=" text-[10px] font-semibold">
            R{pcp + pcp * (15 / 100) * 1}
          </p>
        </span>
        <div className=" w-full h-full mt-2 flex-col bg-slate-950 rounded-lg p-2 flex justify-between">
          <span className=" w-full flex justify-center items-center ">
            <p className=" text-[6px] font-semibold text-white ">About</p>
          </span>
          <p className=" text-[8px] text-white text-start h-full flex items-center text-ellipsis">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={handleIsFunding}
        className=" w-full cursor-pointer sm:w-10/12 md:w-8/12 lg:w-2/12 hover:bg-black hover:scale-95 transition-all duration-200 ease-in-out bg-purple-950/40 text-white h-10 flex justify-center items-center mt-5 rounded-[5px] "
      >
        See more
      </button>

      {/* <p className=" text-[14px] ">This debtor is asking for R{pcp} </p>
      <div className=" w-full flex flex-col items-center justify-center space-y-5 border-2 border-black">
        <p>{title}</p>
        <p>{description}</p>
        <button
          onClick={handleIsFunding}
          className=" bg-cyan-600 mt-4 text-white w-fit px-7 h-8 rounded-[6px]"
        >
          Fund This
        </button>
        <button onClick={() => router.push("/fund")}>Return</button>
      </div> */}
    </div>
  );
};

export default Snapshot;
