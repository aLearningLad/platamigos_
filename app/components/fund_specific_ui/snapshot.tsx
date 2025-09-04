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
    <div className=" w-full min-h-screen justify-center items-center flex ">
      <div className=" w-full p-1 lg:p-3 sm:w-10/12 md:w-8/12 flex flex-col lg:w-4/12 h-[60%] md:h-[55%] lg:h-[40%] border-2 border-black ">
        <header className=" flex gap-1 items-center justify-start">
          <p className=" text-[10px] text-neutral-600 ">Overview</p>{" "}
          <IoInformationCircle size={12} />
        </header>
        <div className=" w-full flex justify-between items-center">
          <p className=" text-[12px] text-neutral-600 ">
            Debtor is seeking a loan <br /> to the value of
          </p>
          <h1 className=" text-3xl font-bold">R{pcp}</h1>
        </div>
      </div>

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
