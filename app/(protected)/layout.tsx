import React from "react";
import SideBar from "../components/dash_comps/sidebar/sidebar";
import Link from "next/link";
import Image from "next/image";

export default function SignedInLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" w-full min-h-screen flex flex-col lg:flex-row relative">
      <SideBar />
      {children}
      {/* <div className=" w-full bottom-0 h-20 fixed flex items-center justify-center sm:hidden p-2 ">
        <Link
          className="bg-black w-full h-20 flex justify-center items-center"
          href={"/dash"}
        >
          <p className=" text-lg text-white">Return</p>
        </Link>
      </div> */}
    </div>
  );
}
