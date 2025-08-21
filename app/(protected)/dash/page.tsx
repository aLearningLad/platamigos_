"use client";

import { handleSignOut } from "@/services/client_side/ubiquitous/logout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dash = () => {
  const router = useRouter();
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const [comm_loans, set_comm_loans] = useState<any[]>([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const res = await fetch("/api/community_loans");
      const loan_data = await res.json();

      set_comm_loans(loan_data.loans);
    };

    fetchLoans();
  }, []);

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center">
      {is_loading ? (
        <div>Just a second...</div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center space-y-6 ">
          {comm_loans.map((loan: Tcommunity_requests) => (
            <Link key={loan.loan_id} href={`/fund_specific/${loan.loan_id}`}>
              {loan.loan_id}
            </Link>
          ))}

          <button
            onClick={() => handleSignOut(router, is_loading, set_is_loading)}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dash;
