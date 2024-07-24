"use client";

import Image from "next/image";
import Navbar from "./Navbar";




const Header = () => {


  return (
    <header className="w-full bg-white z-50 flex justify-between items-center px-8">
      <div>
        <Image src="/logo.png" alt="Logo" width={50} height={20} />
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
