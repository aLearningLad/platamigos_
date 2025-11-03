import { I_offer_card } from "@/models/interfaces";
import { zar_currency } from "@/utils/utils";
import { FaUser } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const OfferCard: React.FC<I_offer_card> = ({
  alias,
  created_at,
  creditor_id,
  description,
  due,
  due_by,
  due_from,
  loan_id,
  pcp,
  term,
  title,
  index,
  handleAccept,
  handleDecline,
}) => {
  return (
    <div
      key={loan_id}
      className={` w-full lg:min-w-[20vw] lg:max-w-[20vw] ${
        index % 2 === 0 ? "bg-slate-950 text-white" : "bg-slate-500/20"
      } lg:min-h-[55vh] lg:max-h-fit min-h-[70vh] rounded-lg flex flex-col p-3 items-center justify-around m-2 `}
    >
      <span className=" w-full flex justify-between items-center">
        <span className="  flex items-center gap-1 mb-4 ">
          <FaUser className=" w-8 h-8 lg:h-4 lg:w-4 " />
          <p className=" text-xl lg:text-[14px]">{alias}</p>
        </span>

        <button
          onClick={handleDecline}
          className=" w-fit group h-fit p-1 cursor-pointer hover:scale-90 transition-all duration-200 ease-in-out bg-red-600 rounded-[4px]"
        >
          <IoTrashBin className=" text-white group-hover:text-black h-6 w-6 lg:h-5 lg:w-5 " />
        </button>
      </span>
      <div className=" w-full flex flex-col">
        <section className=" w-full flex flex-col items-center mb-5 ">
          <p className=" text-2xl lg:text-[12px] mb-1">Your loan details</p>
          <p className=" text-xl lg:text-[14px] mt-2 italic flex text-center mb-5 ">
            {title}
          </p>
          <p className=" text-lg text-center lg:text-[12px] ">{description}</p>
        </section>
      </div>
      <div className=" flex-col w-full flex justify-center items-center ">
        <p className=" text-lg lg:text-[12px] mb-2 ">Offer details</p>

        {/* principle */}
        <span className=" w-full flex justify-between">
          <p className=" text-lg lg:text-[12px]">Loan amount</p>
          <p className=" text-2xl lg:text-[12px]">{zar_currency.format(pcp)}</p>
        </span>
        {/* interest */}
        <span className=" w-full flex justify-between">
          <p className="text-lg lg:text-[12px]">Interest</p>
          <p className=" text-2xl lg:text-[12px]">
            {zar_currency.format(due - pcp)}
          </p>
        </span>
        {/* due */}
        <span className=" w-full flex justify-between">
          <p className="text-lg lg:text-[12px]">Total due</p>
          <p className=" text-2xl lg:text-[12px]">{zar_currency.format(due)}</p>
        </span>
        {/* instalments */}
        <span className=" w-full flex justify-between">
          <p className=" text-lg lg:text-[12px]">Monthly (x{term})</p>
          <p className=" text-2xl lg:text-[12px]">
            {zar_currency.format(Math.floor(pcp / term))}
          </p>
        </span>
        {/* offer date */}
        <span className=" w-full flex justify-between">
          <p className=" text-lg lg:text-[12px]">Posted on</p>
          <p className="text-lg lg:text-[12px]">
            {new Date(created_at).toDateString()}
          </p>
        </span>
      </div>
      <button
        onClick={handleAccept}
        className=" h-20 lg:h-12 w-full cursor-pointer hover:bg-cyan-500 hover:scale-95 transition-all duration-200 bg-green-500 text-xl lg:text-[12px] text-white rounded-[6px] "
      >
        Take this deal
      </button>
    </div>
  );
};

export default OfferCard;
