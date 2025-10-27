"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LandingNav = () => {
  return (
    <nav className=" w-full h-14 lg:min-h-10 justify-between items-center lg:flex">
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

          <Dialog>
            <DialogTrigger className="nav_titles cursor-pointer">
              About
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About this project</DialogTitle>
              </DialogHeader>
              <div className=" w-full h-full gap-12 flex flex-col items-center text-center text-black">
                <p className=" text-[12px]">
                  Platamigos is a demo peer-lending platform. It integrates
                  PostgreSQL for user & transaction data, Redis for caching and
                  Zustand for global state managment.
                </p>

                <p className=" text-[12px]">
                  It is written in Typescript and has custom components styled
                  with Tailwind CSS classes.
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Link
            className="nav_titles"
            target="_blank"
            href={"https://github.com/aLearningLad/platamigos_"}
          >
            GitHub
          </Link>
          <Link className="nav_titles" href={"/"}>
            Shop
          </Link>
        </div>

        {/* search */}
        <button
          onClick={() => toast.success("Sign in to access search")}
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
