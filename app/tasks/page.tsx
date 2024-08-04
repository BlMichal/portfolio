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
  user_id:string;
  desc: string;
  tasksImages: TaskImage[];
};

export default async function TaskPage() {

  const supabase = createClient();

  const { data:tasks, error } = await supabase
  .from('tasks')
  .select('*, tasksImages(imageUrl)')

  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id
  const isAdmin = user?.email

  if (!user) {
    return redirect('/login')
  }


  return (
    <section className="mt-5 md:px-4">   
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {tasks?.map((task: Task) => (    
          <div
            key={task.id}
            className="w-full h-[250px] overflow-hidden border-2 flex flex-col justify-between border-gray-400"
          >
            <Link href={`/tasks/${task.id}`} className="h-full">
              <h2 className="text-2xl text-center">{task.desc}</h2>
            </Link>  
          
            {task.tasksImages && task.tasksImages.length > 0 ? (
              <Image 
                src={task.tasksImages[0].imageUrl} 
                width={100} 
                height={100} 
                objectFit="contain" 
                alt="" 
              />
            ) : (
              <p>No image available</p>
            )}

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
