import { createClient } from "@/utils/supabase/server";
import { login, oAuthSignIn, signUp } from "./actions";
import { redirect } from "next/navigation";
import { LockKeyholeOpen, TriangleAlert, User } from "lucide-react";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col border-2 items-center bg-black/5 md:mt-24 mt-8 max-w-lg mx-auto p-8 shadow-lg relative">      
      <div className="text-center absolute -top-6">
        {searchParams.message && (
          <span className="p-2 rounded-lg text-lg bg-red-700 text-white flex gap-2">
          <TriangleAlert /><span>{searchParams.message}</span>
          </span>          
        )}
      </div>      
      <form className="flex flex-col gap-6 w-full">
      <h2 className="text-black text-2xl text-center font-mono">Přihlásit se</h2>
        <div>
          <label
            htmlFor="email"
            className=" text-base flex gap-1 items-center text-gray-700 mb-2"
          >
            <User /> <span>Email:</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border border-black rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-base flex gap-1 items-center text-gray-700 mb-2"
          >
           <LockKeyholeOpen /> <span>Heslo:</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="on"
            className="w-full border rounded-lg p-2 focus:outline-none border-black focus:border-blue-500"
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400 transition duration-300"
          type="submit"
          formAction={login}
        >
          Přihlásit
        </button>
        <button
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-400 transition duration-300"
          type="submit"
          formAction={signUp}
        >
          Vytvořit účet
        </button>
        <div className="flex justify-between items-center">
        <hr className="w-2/5 border border-gray-400"/>
        <span>nebo</span>
        <hr className="w-2/5 border border-gray-400"/>
        </div>
        <button
          className="w-full bg-orange-500/80 flex justify-center gap-2 items-center text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300"
          type="submit"
          formAction={oAuthSignIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span>Přihlásit se přes Google</span>
        </button>
      </form>
    </div>
  );
}
