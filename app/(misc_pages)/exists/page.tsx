import Link from "next/link";
import React from "react";

const ExistsPage = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center space-y-5 ">
      <h2>Error</h2>
      <h3>You already have an account</h3>
      <Link href={"/auth"}>Take me to login</Link>
    </div>
  );
};

export default ExistsPage;
