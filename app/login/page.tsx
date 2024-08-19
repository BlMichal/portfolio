import { createClient } from "@/utils/supabase/server";
import { login, oAuthSignIn, signUp } from "./actions";
import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {data: { user } } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }


  return (
    <div className="flex flex-col border-2 items-center mt-24 rounded-xl max-w-lg mx-auto p-8 shadow-lg bg-slate-400 relative">
      <div className="text-center absolute -top-3">
        {searchParams.message && (
          <span className="p-2 rounded-lg text-lg bg-red-700 text-white">{searchParams.message}</span>
        )}
      </div>
    <form className="flex flex-col gap-6 w-full">
      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          
          className="w-full border-2 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          
          className="w-full border-2 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        />
      </div>        
      <button
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-slate-500 transition duration-300"
        type="submit"
        formAction={login}
      >
        Log in
      </button>
      <button
        className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
        type="submit"
        formAction={signUp}
      >
        Sign up
      </button>
    </form>
    <form className="w-full mt-6">
    <button 
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-300 transition duration-300"
    type="submit"
    formAction={oAuthSignIn}
  >
    Sign with Google
  </button>

    </form>
  </div>
  );
}
