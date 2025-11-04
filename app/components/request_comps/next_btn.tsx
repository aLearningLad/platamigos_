import { I_nextbtn } from "@/models/interfaces";
import { BiSolidNoEntry } from "react-icons/bi";

const NextBtn: React.FC<I_nextbtn> = ({
  btn_color,
  set_part,
  handleFxn,
  disabler,
}) => {
  return (
    <button
      disabled={disabler}
      className={`bg-cyan-600 ${
        disabler && "brightness-[80%]"
      } cursor-pointer text-white lg:h-12 rounded-[6px] h-20 w-full md:w-8/12 lg:w-3/12 flex justify-center items-center py-2 text-xl  `}
      onClick={(e) => {
        set_part((prev) => prev + 1);
        handleFxn();
      }}
    >
      {disabler ? (
        <BiSolidNoEntry className=" text-3xl lg:text-lg text-white" />
      ) : (
        <p className="md:text-[14px] text-xl">Next</p>
      )}
    </button>
  );
};

export default NextBtn;
