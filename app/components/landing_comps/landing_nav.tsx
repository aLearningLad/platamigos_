"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

const LandingNav = () => {
  return (
    <nav className=" w-full h-20 lg:h-14 justify-between items-center absolute bottom-0 lg:relative lg:flex ">
      {/* desktop */}
      <div className=" w-full h-full hidden lg:flex border-4 border-black justify-center items-center ">
        {/* logo */}
        <div className=" w-[10%] h-full flex justify-center items-center border-4 border-white gap-1 ">
          <Image
            src={"/assets/applogo.png"}
            alt="App Logo"
            width={40}
            height={40}
            className=" rounded-full "
          />
          <p className=" italic text-[10px]">Plata.Migos</p>
        </div>
        {/* middle */}
        <div className=" w-[80%] h-full flex justify-center items-center gap-8 ">
          <Link className="nav_titles" href={"/"}>
            Home
          </Link>
          <Link className="nav_titles" href={"/"}>
            About
          </Link>
          <Link className="nav_titles" href={"/"}>
            GitHub
          </Link>
          <Link className="nav_titles" href={"/"}>
            Shop
          </Link>
        </div>

        {/* search */}
        <div className=" w-[10%] h-full flex justify-center items-center border-2 border-white gap-1">
          <IoMdSearch size={16} />
          <p className="nav_titles">Search</p>
        </div>
      </div>

      {/* mobile */}
      <div className=" flex lg:hidden w-full h-full justify-center items-center ">
        Menu here
      </div>
    </nav>
  );
};

export default LandingNav;
