import AsideBar from "@/components/AsideBar";
import { createClient } from "@/utils/supabase/server";
import TasksView from "./_components/TasksView";

export default async function TaskPage() {

  const supabase = createClient();  
 
  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*, tasksImages(imageUrl)")
   
  return (
    <section className="bg-peak-background min-h-screen-content flex">
      <AsideBar/>
      <TasksView tasks={tasks} />    
    </section>
  );
}
