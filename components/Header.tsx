import Image from "next/image";
import NavbarItems from "./NavbarItems";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";
import Link from "next/link";

const Header = async () => {

  const supabase = createClient();

  const { data: { user }} = await supabase.auth.getUser();

  return (
    <header className="max-w-7xl bg-white z-50 flex items-center justify-between px-8 mx-auto">
      <div className="py-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="block w-full h-auto" />
      </div>
      <nav className="flex items-center md:gap-16">
        <NavbarItems user={user} />
        {user !== null ? (
          <div className="md:flex items-center gap-2 hidden">
            {user?.user_metadata.avatar_url ? <Image src={user?.user_metadata.avatar_url} width={30} height={30} alt="Avatar Icon" className="rounded-full" /> : <span>{user.email}</span>}
            <form action={signOut}>
              <button type="submit" className="text-neutral-400 transition-all hover:text-black/80">
                Odhlásit
              </button>
            </form>
          </div>
        ) : (
          <button className="text-neutral-400 transition-all hover:text-black/80 hidden md:block">
            <Link href={'/login'} /><span>Přihlásit</span>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
