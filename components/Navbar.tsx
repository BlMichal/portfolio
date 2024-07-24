"use client";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex">
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? "X" : "☰"}
          </button>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link
              href={"/"}
              className="flex items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group "
            >
              <span className="transition-all text-xl">Home</span>
              <span className=" transition-all group-hover:translate-y-0.5">
                <ArrowDownToLine />
              </span>
              <div className="absolute top-12 w-auto hidden flex-col gap-4 px-4 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-[999]">
                {/* DROPDOWN ITEMS */}
                <Dropdown />
              </div>
            </Link>
          </li>
          <div className="">
            <ul className="flex justify-center items-center gap-4">
              <li>
                <button className="h-fit text-neutral-400 transition-all hover:text-black/80">
                  Login
                </button>
              </li>
              <li>
                <button className="h-fit border-2 border-neutral-400 px-4 py-2 rounded-xl text-neutral-400 transition-all hover:text-black/80">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </ul>
        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white w-3/4 fixed top-0 flex flex-col justify-between overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-40 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link
              href={"/"}
              className="flex w-fit items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group "
            >
              <span className="transition-all text-xl">Home</span>
              <span className=" transition-all group-hover:translate-y-0.5">
                <ArrowDownToLine />
              </span>
              <div className="absolute top-12 w-auto hidden flex-col gap-4 px-4 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-[999]">
                {/* DROPDOWN ITEMS */}
                <Dropdown />
              </div>
            </Link>
          </li>
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <button className="h-fit text-neutral-400 transition-all hover:text-black/80">
                  Login
                </button>
              </li>
              <li>
                <button className="h-fit border-2 border-neutral-400 px-4 py-2 rounded-xl text-neutral-400 transition-all hover:text-black/80">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
