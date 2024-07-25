import Image from "next/image";
import NavbarItems from "./NavbarItems";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

const Header = async () => {
  const supabase = createClient();
  const {    data: { user },
} = await supabase.auth.getUser();

  console.log(user);

  return (
    <header className="max-w-7xl bg-white z-50 flex items-center justify-between px-8 mx-auto">
      <div className="py-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className="flex items-center md:gap-16">
        <NavbarItems login={user} />
        {user !== null ? (
          <div className="md:flex items-center gap-2 hidden">
            <span>{user.email}</span>
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
      </nav>
    </header>
  );
};

export default Header;
