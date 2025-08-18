"use client";

import { handleSignOut } from "@/services/client_side/ubiquitous/logout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Dash = () => {
  const router = useRouter();
  const [is_loading, set_is_loading] = useState<boolean>(false);

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center">
      {is_loading ? (
        <div>Just a second...</div>
      ) : (
        <button
          onClick={() => handleSignOut(router, is_loading, set_is_loading)}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Dash;
