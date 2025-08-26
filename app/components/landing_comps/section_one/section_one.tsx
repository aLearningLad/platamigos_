import { FaPlayCircle } from "react-icons/fa";
import LeftSide from "./left_side";
import RightSide from "./right_side";

const SectionOne = () => {
  return (
    <section className=" w-full lg:h-[calc(100vh-3.5rem)] pt-9 lg:pt-14 flex flex-col">
      <div className=" w-full h-fit flex flex-col lg:flex-row ">
        {/* Left Side */}
        <LeftSide />
        {/* Left Side */}

        {/* Right Side */}
        <RightSide />
        {/* Right Side */}
      </div>
      <div className=" w-full h-[15vh] border-2 border-red-400 ">
        tiles here
      </div>
    </section>
  );
};

export default SectionOne;
