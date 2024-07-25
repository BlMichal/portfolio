import { createClient } from "@/utils/supabase/server";
import { login, signup } from "./actions";
import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {data: { user }, } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }


  return (
    <form className="flex flex-col border-2 items-center mt-24 gap-6 rounded-xl max-w-lg mx-auto p-8 shadow-lg bg-slate-400">
      <div className="w-full">
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
          required
          className="w-full border-2 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="w-full">
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
          required
          className="w-full border-2 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        {searchParams.message && (
          <span className="text-sm text-red-600">{searchParams.message}</span>
        )}
      </div>
      <button
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-slate-500 transition duration-300"
        type="submit"
        formAction={login}
      >
        Log in
      </button>
      <button
        className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-300 mt-2"
        type="submit"
        formAction={signup}
      >
        Sign up
      </button>
    </form>
  );
}
