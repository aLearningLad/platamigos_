"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

const LandingNav = () => {
  return (
    <nav className=" w-full h-20 lg:h-14 justify-between items-center top-[100%] lg:relative lg:flex ">
      {/* desktop */}
      <div className=" w-full h-full hidden lg:flex justify-center items-center ">
        {/* logo */}
        <div className=" w-[10%] h-full flex justify-center items-center gap-1 ">
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
        <button
          onClick={() => alert("Sign in to access search")}
          className=" w-[10%] h-full flex justify-center hover:bg-black/40 rounded-lg hover:text-white hover:scale-90 transition-all duration-200 items-center gap-1 cursor-pointer"
        >
          <IoMdSearch size={16} />
          <p className="nav_titles">Search</p>
        </button>
      </div>

      {/* mobile */}
      {/* <div className=" flex lg:hidden w-full h-full justify-center items-center ">
        Menu here
      </div> */}
    </nav>
  );
};

export default LandingNav;
