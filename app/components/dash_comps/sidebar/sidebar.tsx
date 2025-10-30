import Image from "next/image";
import SidebarNav from "./sidebarnav";
import SidebarOptions from "./sidebaroptions";
import SidebarSignOut from "../sidebar_sign_out";

const SideBar = () => {
  return (
    <nav className=" hidden min-h-screen border-r-[1px] border-neutral-400/10 lg:flex w-72 flex-col px-2 py-1 bg-white">
      <SidebarSignOut />
      <div className="w-full h-full flex flex-col justify-between ">
        <SidebarNav />

        <SidebarOptions />
      </div>
    </nav>
  );
};

export default SideBar;
