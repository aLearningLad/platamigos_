import { I_req_sum } from "@/models/interfaces";
import { handleRequestLoan } from "@/pm_functions/request_loan";
import React from "react";

const ReqSum: React.FC<I_req_sum> = ({
  alias,
  description,
  loan_type,
  pcp,
  router,
  set_is_loading,
  title,
}) => {
  return (
    <div>
      summary & submit
      {/* submit request */}
      <button
        disabled={title.length < 5 || description.length < 5 || pcp === 0}
        onClick={() =>
          handleRequestLoan(
            title,
            description,
            pcp,
            loan_type,
            router,
            set_is_loading,
            alias
          )
        }
        className={`${
          title.length < 5 || description.length < 5 || pcp === 0
            ? "bg-gray-400/60 brightness-50 text-white/70 "
            : "bg-green-400"
        }`}
      >
        Publish Request
      </button>
    </div>
  );
};

export default ReqSum;
