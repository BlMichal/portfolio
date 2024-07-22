import DeleteTaskForm from "@/components/DeleteTaskForm";
import EditTaskForm from "@/components/EditTaskForm";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

export default async function TaskPage() {
  const { data: tasks, error } = await supabase.from("tasks").select();

  return (
    <section className="mt-5">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 ">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="w-full h-[250px] overflow-hidden bg-slate-800 flex flex-col justify-between"
          >            
            <Link href={`/tasks/${task.id}`} className="h-full">
              <h2 className="text-2xl text-white text-center">{task.desc}</h2>
            </Link>
            <div className="flex justify-between">                        
              <DeleteTaskForm id={task.id} className="w-full" />
              <EditTaskForm task={task} className="w-full"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
