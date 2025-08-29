import Image from "next/image";
import SidebarNav from "./sidebarnav";
import SidebarOptions from "./sidebaroptions";

const SideBar = () => {
  return (
    <nav className=" hidden min-h-screen lg:flex w-48 flex-col px-2 py-1">
      <header className=" flex w-full h-12 border-2 border-black items-center justify-start">
        <Image
          src={"/assets/applogo.png"}
          width={40}
          height={40}
          alt="app logo"
        />
        <p className=" italic text-[8px] ">Plata.Migos</p>
      </header>
      <div className="w-full h-full flex flex-col justify-between border-2 border-black ">
        <SidebarNav />

        <SidebarOptions />
      </div>
    </nav>
  );
};

export default SideBar;
