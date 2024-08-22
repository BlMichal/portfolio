"use client";

import { ChevronDown} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/app/login/actions";

const NavbarMenu = [
  {
    id: 1,
    title: "Inzeráty",
    href: "/advertisement",
    dropdown: [
      { id: 1, title: "Vytvořit inzerát", href: "/advertisement/create" },
      { id: 2, title: "Seznam inzerátů", href: "/advertisement/" },
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

  const [openDropDown, setOpenDropDown] = useState<number| null>(null); // U mobilních zařízení, menu dropdown otevřít na clicknutí, místo na hover.
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = (id: number) => {
    if (openDropDown === id) {
      // If the clicked dropdown is already open, close it
      setOpenDropDown(null);
    } else {
      // Open the clicked dropdown and close others
      setOpenDropDown(id);
    }
  };

  return (
    <nav className="flex items-center justify-between md:px-8 px-4 h-14">
      {/*Desktop nav*/}
      <>
        <Link href={"/"}>
          <Image src="/logo.png" alt="Header logo" width={40} height={40} />
        </Link>
      </>
      <div className="flex items-center bg-white">
        <ul className="md:flex hidden items-center gap-3 mr-16">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <button className="flex items-center relative hover:text-black text-neutral-400 px-2 py-3 transition-all group">
                <span onClick={() => router.replace(menu.href)}>
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
                  className="text-neutral-400 transition-all px-2 py-3 hover:text-black/80"
                >
                  Odhlásit
                </button>
              </form>
            </div>
          ) : (
            <button className="text-neutral-400 transition-all px-2 py-3 hover:text-black/80 hidden md:block">
              <Link href={"/login"}>
                <span>Přihlásit</span>
              </Link>
            </button>
          )}
        </div>

        {/* Mobile nav */}
        <div
          className={`
        md:hidden bg-white w-full fixed top-0 flex flex-col overflow-y-hidden items-start justify-between bottom-0 py-24 pl-4
        duration-300 z-40 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <ul>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button className="flex flex-col mb-4 hover:text-black text-neutral-400">
                  <span                  
                    onClick={() => handleToggle(menu.id)}
                    className="flex text-2xl items-center"
                  >
                    {menu.title}
                    {menu.dropdown && <ChevronDown />}
                  </span>
                  {/* dropdown menu */}
                  {menu.dropdown && openDropDown === menu.id && (
                    <div className="flex gap-2 flex-col text-xl px-4 py-4 rounded-lg bg-white shadow-md z-[999]">
                      {menu.dropdown.map((dropdownItem) => (
                        <Link key={dropdownItem.id} href={dropdownItem.href}>
                          <span
                            onClick={() => {
                              setOpen(false);
                              setOpenDropDown(null);}
                            }
                            className="whitespace-nowrap hover:text-black text-neutral-400"
                          >
                            {dropdownItem.title}
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
              <div className="md:hidden items-center gap-4 block ">
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
                    className="text-neutral-400 text-2xl hover:text-black/80"
                  >
                    Odhlásit
                  </button>
                </form>
              </div>
            ) : (
              <button className="text-neutral-400 text-2xl hover:text-black/80 md:hidden block">
                <Link href={"/login"}>
                  <span className="">Přihlásit</span>
                </Link>
              </button>
            )}
          </>
        </div>
        <button onClick={() => setOpen(!open)} className="ml-4 text-2xl md:hidden z-50">
          {open ? "X" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
