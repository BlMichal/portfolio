"use client";

import {
  ArrowBigLeftDash,
  BookOpenCheck,
  FilePlus2,
  House,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, title: "Nový inzerát", src: <FilePlus2 />, href:'/tasks/create' },
    { id: 2, title: "Domovská stránka", src: <House />, href:'/' },
    { id: 3, title: "Moje inzeráty", src: <BookOpenCheck />, href:'/tasks/' },
    { id: 4, title: "Oblíbené inzeráty", src: <Star />, href:'/' },
  ];

  return (
    <aside className="flex">
      <div
        className={`${
          isOpen ? "w-72" : "w-20"
        } h-full bg-customColor1 duration-300 relative`}
      >
        <ArrowBigLeftDash
          className={`absolute cursor-pointer -right-4 top-9 h-9 w-9 border-2 rounded-full md:block z-10 hidden bg-white ${
            !isOpen && "rotate-180"
          } `}
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className="flex flex-col px-3 gap-2 mt-4 ">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.href}
              className=" text-white text-sm flex gap-2 items-center cursor-pointer px-4 py-2 rounded-xl group hover:bg-gray-500 relative"
            >
              <span>{menu.src}</span>
              {isOpen ? <p className="origin-left whitespace-nowrap">{menu.title}</p> : <div className="hidden group-hover:block md:group-hover:hidden absolute px-3 top-0 left-14 rounded-lg bg-black z-10">{menu.title}</div>}
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  )
};

export default AsideBar;
