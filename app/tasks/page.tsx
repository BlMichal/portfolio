import DeleteTaskForm from "@/components/DeleteTaskForm";
import EditTaskForm from "@/components/EditTaskForm";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

export default async function TaskPage() {
  const { data: tasks, error } = await supabase.from("tasks").select();

  return (
    <section className="mt-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="w-full h-[250px] overflow-hidden border-2 rounded-2xl flex flex-col justify-between shadow-2xl"
          >
            <Link href={`/tasks/${task.id}`} className="h-full">
              <h2 className="text-2xl text-center">{task.desc}</h2>
            </Link>
            <div className="flex justify-around gap-1 p-2">
              <DeleteTaskForm id={task.id} className="w-3/6" />
              <EditTaskForm task={task} className="w-3/6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
