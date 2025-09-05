import { I_offer_card } from "@/models/interfaces";
import { FaUser } from "react-icons/fa";

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
}) => {
  return (
    <div
      key={loan_id}
      className={`min-w-[20vw] max-w-[20vw] ${
        index % 2 === 0 ? "bg-slate-950 text-white" : "bg-slate-500/20"
      } min-h-[55vh] rounded-lg flex flex-col p-3 items-center justify-around m-2 `}
    >
      <span className=" w-full flex justify-between items-center">
        <p className=" text-[10px] flex items-center gap-1 ">
          <FaUser size={8} />
          {alias}
        </p>
        <p className="text-[10px]">{new Date(created_at).toDateString()}</p>
      </span>
      <div className=" w-full flex flex-col">
        <section className=" w-full flex flex-col items-center ">
          <p className=" text-[8px]">Your loan details</p>
          <p className=" text-[10px] ">{title}</p>
          <p className=" text-[10px] ">{description}</p>
        </section>
      </div>
      <div className=" flex-col w-full flex justify-center items-center ">
        <p className=" text-[8px] ">Offer details</p>

        {/* principle */}
        <span className=" w-full flex justify-between">
          <p className="text-[10px]">Loan amount</p>
          <p className="text-[10px]">R{pcp}</p>
        </span>
        {/* interest */}
        <span className=" w-full flex justify-between">
          <p className="text-[10px]">Interest</p>
          <p className="text-[10px]">R{due - pcp}</p>
        </span>
        {/* due */}
        <span className=" w-full flex justify-between">
          <p className="text-[10px]">Total due</p>
          <p className="text-[10px]">R{due}</p>
        </span>
        {/* instalments */}
        <span className=" w-full flex justify-between">
          <p className="text-[10px]">Monthly (x{term})</p>
          <p className="text-[10px]">R{Math.floor(pcp / term)}</p>
        </span>
      </div>
      <button className=" h-8 w-full cursor-pointer hover:bg-cyan-500 hover:scale-95 transition-all duration-200 bg-green-500 text-[10px] text-white rounded-[6px] ">
        Take this deal
      </button>
    </div>
  );
};

export default OfferCard;
