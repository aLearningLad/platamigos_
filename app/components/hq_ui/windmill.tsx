import Image from "next/image";
import { FaRegSnowflake } from "react-icons/fa";
import { FaSnowman } from "react-icons/fa";
import WindmillTop from "./windmill_top";
import WindmillMiddle from "./windmill_middle";
import WindmillBottom from "./windmill_bottom";

const Windmill = () => {
  return (
    <div className=" w-full h-[60%] bg-gradient-to-br from-purple-700/20 via-pink-300/30 to-rose-600/20 rounded-3xl relative flex flex-col p-2 lg:p-4">
      <WindmillTop />

      {/* middle */}
      <WindmillMiddle />

      {/* bottom */}
      <WindmillBottom />
    </div>
  );
};

export default Windmill;
