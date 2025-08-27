import { FaPlayCircle } from "react-icons/fa";
import LeftSide from "./left_side";
import RightSide from "./right_side";
import { SlideTabs } from "@/dev_data/infinite_slide_tabs";
import Image from "next/image";

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
      <div className="overflow-hidden whitespace-nowrap w-full mt-12">
        <div className="flex animate-marquee">
          {[...SlideTabs, ...SlideTabs, ...SlideTabs].map((item, i) => (
            <div
              key={i}
              className="mx-4 p-4 bg-gray-200/30 rounded-lg overflow-hidden relative min-w-2/12 h-14 "
            >
              <Image alt="logo" fill className=" object-contain " src={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
