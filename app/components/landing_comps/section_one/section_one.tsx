import { FaPlayCircle } from "react-icons/fa";
import LeftSide from "./left_side";
import RightSide from "./right_side";

const SectionOne = () => {
  return (
    <section className=" w-full lg:h-[calc(100vh-3.5rem)] flex flex-col lg:flex-row pt-9 lg:pt-14">
      {/* Left Side */}
      <LeftSide />
      {/* Left Side */}

      {/* Right Side */}
      <RightSide />
      {/* Right Side */}
    </section>
  );
};

export default SectionOne;
