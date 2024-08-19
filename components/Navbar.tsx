"use client";

import { ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/app/login/actions";

const NavbarMenu = [
  {
    id: 1,
    title: "Inzeráty",
    href: "/tasks",
    dropdown: [
      { id: 1.1, title: "Vytvořit inzerát", href: "/tasks/create" },
      { id: 1.2, title: "Seznam inzerátů", href: "/tasks/" },
    ],
  },
  {
    id: 2,
    title: "Domů",
    href: "/",
  },
];

const Navbar = ({ userInterface }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 h-14">
      {/*Desktop nav*/}
      <div className="">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Header logo" width={40} height={40} />
        </Link>
      </div>
      <div className="flex items-center bg-white">
        <ul className="md:flex hidden items-center gap-3 mr-16">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <button className="flex items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group">
                <span
                  onClick={() => router.replace(menu.href)}
                >
                  {menu.title}
                </span>
                {menu.dropdown ? (
                  <>
                    <span className=" transition-all group-hover:translate-y-0.5">
                      <ChevronDown />
                    </span>
                    <div className="absolute top-12 w-auto hidden flex-col gap-4 px-4 bg-white py-3 shadow-md transition-all group-hover:flex z-[999]">
                      {/* Dropdown menu */}
                      {menu.dropdown.map((dropdownMenu) => (
                        <Link key={dropdownMenu.id} href={dropdownMenu.href}>
                          <span className="whitespace-nowrap hover:text-black text-neutral-400">
                            {dropdownMenu.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {userInterface !== null ? (
            <div className="md:flex items-center gap-2 hidden">
              {userInterface?.user_metadata.avatar_url ? (
                <Image
                  src={userInterface?.user_metadata.avatar_url}
                  width={30}
                  height={30}
                  alt="Avatar Icon"
                  className="rounded-full"
                />
              ) : (
                <span>{userInterface.email}</span>
              )}
              <form action={signOut}>
                <button
                  type="submit"
                  className="text-neutral-400 transition-all hover:text-black/80"
                >
                  Odhlásit
                </button>
              </form>
            </div>
          ) : (
            <button className="text-neutral-400 transition-all hover:text-black/80 hidden md:block">
              <Link href={"/login"}>
                <span>Přihlásit</span>
              </Link>
            </button>
          )}
        </div>

        {/* Mobile nav */}
        <div
          className={`
        md:hidden bg-white w-full fixed top-0 flex flex-col overflow-y-auto bottom-0 py-24 pl-4
        duration-300 z-40 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <ul>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button className="flex flex-col my-2 hover:text-black text-neutral-400 group ">
                  <span
                    onClick={() => {
                      router.replace(menu.href);
                      setOpen(false);
                    }}
                    className="flex text-xl items-center"
                  >
                    {menu.title}
                    {menu.dropdown && <ChevronDown />}
                  </span>
                  {/* dropdown menu */}
                  {menu.dropdown && (
                    <div className="group-hover:flex gap-2 hidden ease-in-out transition-all duration-300 flex-col px-4 py-2 rounded-lg bg-white shadow-md z-[999]">
                      {menu.dropdown.map((dropdownMenu) => (
                        <Link key={dropdownMenu.id} href={dropdownMenu.href}>
                          <span
                            onClick={() => setOpen(false)}
                            className="whitespace-nowrap hover:text-black text-neutral-400"
                          >
                            {dropdownMenu.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <>
            {userInterface !== null ? (
              <div className="md:hidden items-center mt-20 gap-2 block">
                {userInterface?.user_metadata.avatar_url ? (
                  <Image
                    src={userInterface?.user_metadata.avatar_url}
                    width={30}
                    height={30}
                    alt="Avatar Icon"
                    className="rounded-full"
                  />
                ) : (
                  <span>{userInterface.email}</span>
                )}
                <form action={signOut}>
                  <button
                    type="submit"
                    className="text-neutral-400 transition-all hover:text-black/80"
                  >
                    Odhlásit
                  </button>
                </form>
              </div>
            ) : (
              <button className="text-neutral-400 transition-all hover:text-black/80 hidden md:block">
                <Link href={"/login"}>
                  <span>Přihlásit</span>
                </Link>
              </button>
            )}
          </>
        </div>
        <button onClick={() => setOpen(!open)} className="fixed md:hidden z-50">
          {open ? "X" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
