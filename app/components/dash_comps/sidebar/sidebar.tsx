import Image from "next/image";
import SidebarNav from "./sidebarnav";
import SidebarOptions from "./sidebaroptions";
import SidebarSignOut from "../sidebar_sign_out";

const SideBar = () => {
  return (
    <div className="min-h-screen hidden w-72 lg:flex bg relative">
      {/* bubble 1 */}
      <div className="pulse1 absolute top-32 left-4 w-20 h-20 rounded-full bg-gradient-to-br from-red-700/60 via-red-400/40 to-transparent" />

      {/* bubble 2 */}
      <div className="pulse2 absolute bottom-32 left-12 w-36 h-36 rounded-full bg-gradient-to-t from-cyan-700/60 via-cyan-400/40 to-transparent" />

      {/* bubble 3 */}
      <div className=" pulse3 absolute top-[40%] right-7 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-pink-400/90 to-transparent" />

      <nav className=" h-full w-full border-r-[1px] border-neutral-400/10 flex flex-col px-2 py-1 bg-transparent backdrop-blur-md">
        <SidebarSignOut />
        <div className="w-full h-full flex flex-col justify-between ">
          <SidebarNav />

          <SidebarOptions />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
