import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const BottomTab = () => {
  return (
    <div className=" h-full w-full bg-white rounded-xl flex flex-col p-2 justify-around ">
      <span className=" w-full hidden lg:flex justify-between items-center h-[15%]">
        <p className=" italic text-[10px] font-semibold">plata.migos</p>
        <div className=" w-fit flex gap-2 items-center justify-end">
          <p className=" w-fit px-3 rounded-lg bg-purple-600/20 text-purple-700 text-[7px] py-1 ">
            finance
          </p>
          <p className=" w-fit px-3 rounded-lg bg-orange-600/20 text-orange-700 text-[7px] py-1 ">
            credit
          </p>
        </div>
      </span>
      <div className=" w-full text-start lg:block hidden">
        <p className=" text-[8px] text-neutral-600 w-8/12">
          This project was written in Typescript. It uses Zustand for state
          management, serverside caching is via redis, and client side caching
          is handle by {"React's"} SWR hook. User data and transactions are
          stored across postgreSQL tables. The SQL used to construct these
          tables is included with this {"app's"} source code.
        </p>
      </div>
      <div className=" w-full gap-6 flex lg:flex-row flex-col lg:justify-start items-center px-1 lg:px-0">
        <Link
          href={"https://github.com/aLearningLad/platamigos_"}
          target="_blank"
          className=" w-full lg:w-fit px-5 mt-4 lg:mt-0 rounded-[8px] min-h-24 lg:min-h-9 group hover:bg-black hover:scale-90 transition-all duration-200 ease-in-out bg-neutral-500/10 flex justify-center items-center gap-1"
        >
          <FaGithub
            size={14}
            className=" text-black group-hover:text-white hidden lg:flex"
          />
          <FaGithub
            size={30}
            className=" text-black group-hover:text-white flex lg:hidden"
          />
          <p className=" text-[18px] lg:text-[8px] text-neutral-700 group-hover:text-white ">
            See The Code
          </p>
        </Link>
        <Link
          href={"/dash"}
          className=" w-full lg:hidden px-5 rounded-[8px] min-h-24 bg-black hover:scale-90 transition-all duration-200 ease-in-out flex justify-center items-center gap-1"
        >
          <p className=" text-[18px] text-white ">Return</p>
        </Link>
      </div>
    </div>
  );
};

export default BottomTab;
