import DeleteTaskForm from "@/components/DeleteTaskForm";
import EditTaskForm from "@/components/EditTaskForm";
import Form from "@/components/Form";
import { createClient } from "@/utils/supabase/server";
import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TaskPage() {

  const supabase = createClient();
  const { data: tasks } = await supabase.from("tasks").select();

  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id
  const isAdmin = user?.email

  if (!user) {
    return redirect('/login')
  }
  

  return (
    <section className="mt-5 md:px-4">      
      <Form />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="w-full h-[250px] overflow-hidden border-2 flex flex-col justify-between border-gray-400"
          >
            <Link href={`/tasks/${task.id}`} className="h-full">
              <h2 className="text-2xl text-center">{task.desc}</h2>
            </Link>    
            <Image src={'/'} width={100} height={100} objectFit="contain" alt="" />
            {userId === task.user_id || isAdmin == process.env.SUPABASE_ADMIN ?
              <div className="flex justify-around gap-1 p-2">
                <DeleteTaskForm id={task.id} className="w-3/6" />
                <EditTaskForm task={task} className="w-3/6" />                
              </div> : ""}
          </div>
        ))}
      </div>

    </section>
  );
}
