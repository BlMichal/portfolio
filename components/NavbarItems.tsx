"use client";

import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { signOut } from "@/app/login/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";



const Navbar = ({user}) => {

  const router = useRouter()
  const [open, setOpen] = useState(false);  

  return (          
      <div className="flex items-center font-medium bg-white" >     
        <ul className="md:flex hidden items-center gap-3 font-[Poppins]">
          <li>
            <button              
              className="flex items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group"
            >
              <span onClick={()=>router.replace('/')} className="transition-all text-xl">Home</span>
              <span className=" transition-all group-hover:translate-y-0.5">
                <ChevronsDown />
              </span>
              <div className="absolute top-12 w-auto hidden flex-col gap-4 px-4 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-[999]">
                {/* DROPDOWN ITEMS */}
                <Dropdown href='tasks/create' >Create list</Dropdown>
                <Dropdown href='tasks/'>Tasks list</Dropdown>
              </div>
            </button>
          </li>
          <li >
            <button              
              className="flex items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group"
            >
              <span onClick={()=>router.replace('/')} className="transition-all text-xl">About</span>            
            </button>
          </li>
          <li className="mr-[2rem]">
            <button              
              className="flex items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group"
            >
              <span onClick={()=>router.replace('/')} className="transition-all text-xl">Projects</span>
             
            </button>
          </li>          
        </ul>

        {/* Mobile nav */}        
        <ul
          className={`
        md:hidden bg-white w-full fixed top-0 flex flex-col overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-40 ${open ? "left-0" : "left-[-100%]"}
        `}
        >          
          <li>
            <button             
              className="flex flex-col hover:text-black text-neutral-400 group transition-all group "
              
            ><div className="flex">
              <span onClick={()=>router.replace('/')} className="transition-all text-xl">Home</span>
              <span className=" transition-all group-hover:translate-y-0.5">
                <ChevronsDown />
              </span>
            </div>
              <div className="group-hover:flex gap-2 hidden flex-col px-4 rounded-lg  bg-white py-4 shadow-md transition-all z-[999]">
                {/* DROPDOWN ITEMS */} 
                <Dropdown href='tasks/create' >Create list</Dropdown>
                <Dropdown href='tasks/'>Tasks list</Dropdown>               
              </div>
            </button>
          </li>
          <li>
            <button              
              className="flex flex-col hover:text-black text-neutral-400 group py-3 transition-all group "
              
            ><div className="flex">
              <span onClick={()=>router.replace('/')} className="transition-all text-xl">Home</span>
              <span className=" transition-all group-hover:translate-y-0.5">
                <ChevronsDown />
              </span>
            </div>
              <div className="group-hover:flex gap-2 hidden flex-col px-4 rounded-lg  bg-white py-4 shadow-md transition-all z-[999]">
                {/* DROPDOWN ITEMS */}
                
              </div>
            </button>
          </li>                 
          <div className="mt-10">
            {user !== null ? (
          <div className="flex flex-col gap-2 md:hidden">
           {user?.user_metadata.avatar_url ? <Image src={user?.user_metadata.avatar_url} width={30} height={30} alt="Avatar Icon" className="rounded-full"/> : <span>{user?.email}</span>}
          <form action={signOut}>
            <button type="submit" className="text-neutral-400 transition-all hover:text-black/80">
              SignOut
            </button>
          </form>
          </div>
        ) : (
          <button className="text-neutral-400 transition-all hover:text-black/80">
            <Link href={'/login'}/><span>Login</span>
          </button>
        )}
          </div>          
        </ul>        
        <button onClick={() => setOpen(!open)} className="fixed p-2 md:hidden z-50">
            {open ? "X" : "☰"}
          </button>     
    </div>   
  );
};

export default Navbar;
