import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const RightSide = () => {
  return (
    <div className=" w-full lg:w-5/12 lg:pl-6 pt-8 items-center flex relative h-[40vh] lg:h-[55vh] border-2 border-black ">
      {/* top block jutting in */}
      <div className=" absolute top-0 left-[23%] rounded-lg h-[50%] w-3/12 ">
        {/* inner block */}
        <div className=" w-full h-full relative flex items-end ">
          <Image
            src={"/assets/lady1.png"}
            width={40}
            height={15}
            className=" absolute left-[33%] top-7 rounded-full  "
            alt="Profile Image"
          />
          <div className=" bg-neutral-500/40 w-full h-[70%] rounded-lg flex flex-col justify-end items-center p-2">
            <h3 className=" text-[10px] font-bold ">Megan Khumalo</h3>
            <p className=" text-[8px] text-neutral-700 italic ">Lender</p>
            <div className=" w-full bg-neutral-600/30 my-1 h-[2px] rounded-full " />
            <span className=" w-full flex justify-around items-center">
              <FaFacebookF size={8} />
              <div className=" w-fit h-fit p-2 rounded-full bg-cyan-400/10 ">
                <RiTwitterXLine size={8} className=" text-cyan-700" />
              </div>
              <RiInstagramFill size={8} />
            </span>
          </div>
        </div>
        {/* inner block */}
      </div>
      {/* top block jutting in */}

      {/* main block */}
      <div className=" w-full lg:w-[55%] h-[70%] bg-neutral-300 rounded-lg "></div>
      {/* main block */}

      {/* lower block jutting in */}
      <div className=" w-3/12 h-[40%] absolute bottom-0 bg-neutral-600 left-1 rounded-lg "></div>
      {/* lower block jutting in */}
    </div>
  );
};

export default RightSide;
