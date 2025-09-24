"use client";

import { I_signoutbtn } from "@/models/interfaces";
import { handleSignOut } from "@/services/client_side/ubiquitous/logout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignOutBtn: React.FC<I_signoutbtn> = ({
  is_loading,
  router,
  set_is_loading,
}) => {
  return (
    <button
      onClick={() => handleSignOut(router, is_loading, set_is_loading)}
      className={`h-20 w-full bg-black text-white ${
        is_loading ? "hidden" : "flex"
      } lg:hidden justify-center items-center text-[14px] `}
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
