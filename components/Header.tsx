"use client";

import Image from "next/image";
import Navbar from "./Navbar";




const Header = () => {


  return (
    <header className="max-w-7xl bg-white z-50 flex items-center justify-between px-8 mx-auto">
      <div className="py-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
          
      <Navbar/>
      
    </header>
  );
};

export default Header;
