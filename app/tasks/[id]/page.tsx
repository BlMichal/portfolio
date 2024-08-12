import DeleteTaskForm from "@/app/tasks/_components/DeleteTaskForm";
import EditTaskForm from "@/app/tasks/_components/EditTaskForm";
import { createClient } from "@/utils/supabase/server";
import ImageSwiperGallery from "../_components/ImageSwiperGallery";
import ImageUpload from "../_components/ImageUpload";

const DetailTasksPage = async ({ params }:{ params: { id: string }}) => {
  const supabase = createClient();

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", params.id);

  const { data: tasksImages } = await supabase
    .from("tasksImages")
    .select("*")
    .eq("id_tasks", params.id)
    .order("id", { ascending: true });

  return (
    <main className="bg-slate-800 min-h-screen-content">
      <div>
        <ImageSwiperGallery images={tasksImages} />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center">       
        <div>
          {tasks?.map((task) => (
            <div className="flex flex-col gap-2 px-4 mt-4" key={task.id}>
              <h2 className="text-3xl text-white">{task.title}</h2>
              <p className="text-1xl text-white">
                Tohle je id stranky:{task.id}
              </p>
              <p className="text-1xl text-white">{task.desc}</p>
              <div className="flex mt-20">
                <DeleteTaskForm id={task.id} className="" />
                <EditTaskForm task={task} className="" />
              </div>
            </div>
          ))}
        </div>
        <div className="ml-12 mt-4">
          <ImageUpload variant={"compact"} pageId={params.id}  />
        </div>
      </div>
    </main>
  );
};

export default DetailTasksPage;
