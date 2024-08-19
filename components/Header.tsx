import Navbar from "./Navbar";
import { createClient } from "@/utils/supabase/server";

const Header = async() => {

  const supabase = createClient();

  const { data: { user }} = await supabase.auth.getUser();

  return (
    <header className="max-w-7xl mx-auto">
      <Navbar userInterface={user}/>     
    </header>
  );
};

export default Header;
