import DeleteTaskForm from "@/app/tasks/_components/DeleteTaskForm";
import EditTaskForm from "@/app/tasks/_components/EditTaskForm";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type TaskImage = {
  imageUrl: string;
  id_tasks?: number;
};

type Task = {
  id: number;
  user_id: string;
  desc: string;
  tasksImages: TaskImage[];
};

export default async function TaskPage() {
  const supabase = createClient();

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*, tasksImages(imageUrl)");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  const isAdmin = user?.email;

  if (!user) {
    return redirect("/login");
  }

  return (
    <section className="bg-crosspattern h-screen">
      <div className="max-w-7xl grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-2 pt-14 px-4 mx-auto ">
        {tasks?.map((task: Task) => (
          <div
            key={task.id}
            className="h-[300px] border-2 flex flex-col justify-between bg-slate-100 shadow-md rounded-lg"
          >
            <div className="relative mx-4 -mt-6 h-1/2 overflow-hidden rounded-xl">
              {task.tasksImages && task.tasksImages.length > 0 ? (
                <Image
                  src={task.tasksImages[0].imageUrl}
                  fill
                  alt="Fotogragie inzerátu"
                  className="object-cover hover:scale-[0.9] rounded-2xl"
                />
              ) : (
                <p className="text-center mt-16 font-bold">
                  Nebyli nalezeny žádné fotografie
                </p>
              )}
            </div>
            <article className="pb-4 mt-2 px-4 flex-auto">
              <h2 className="mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {task.title}
              </h2>
              <p className="text-lg font-light leading-relaxed text-inherit">
                Město: <span className="font-bold">{task.city}</span>
              </p>
              <p className="text-lg mb-6 font-light leading-relaxed text-inherit">
                Cena: <span className="font-bold">{task.price}Kč</span>{" "}
              </p>
              <Link
                href={`/tasks/${task.id}`}
                className="rounded-lg w-full bg-purple-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Více informací
              </Link>
            </article>
            {isAdmin == process.env.SUPABASE_ADMIN ? (
              <div className="flex justify-around gap-1 p-2">
                <DeleteTaskForm id={task.id} className="w-3/6" />
                <EditTaskForm task={task} className="w-3/6" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
