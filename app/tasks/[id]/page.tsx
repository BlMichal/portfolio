import DeleteTaskForm from "@/app/tasks/_components/DeleteTaskForm";
import EditTaskForm from "@/app/tasks/_components/EditTaskForm";
import { createClient } from "@/utils/supabase/server";
import ImageSwiperGallery from "./_components/ImageSwiperGallery";
import ImageUpload from "../_components/ImageUpload";
import { Grid2X2, Landmark, Phone, Wallet } from "lucide-react";

type DetailAdProps = {  
  id: string | number;
  desc: string;
  title: string;
  price: number;
  postcode: number;
  city: string;
  category: string;
  mobileNumber: number;
  user_id: string; 
};

const DetailAdPage = async ({ params }:{ params: { id: string }}) => {
  const supabase = createClient();

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*, tasksImages(id,imageUrl)")
    .eq("id", params.id)
    

  // const { data: tasksImages } = await supabase
  //   .from("tasksImages")
  //   .select("*")
  //   .eq("id_tasks", params.id)
  //   .order("id", { ascending: true });

    const { data: { user }} = await supabase.auth.getUser();
     const userId = user?.id;
    // const isAdmin = user?.email;    



  return (
    <section className="min-h-screen-content bg-slate-600">
       <div className="max-w-7xl mx-auto">
        <ImageSwiperGallery images={tasks} user={userId} />
      </div> 
      <div className="max-w-7xl mx-auto">
          {tasks?.map((task:DetailAdProps)=> (
            <div className="flex flex-col gap-2 px-4 pt-4 text-white" key={task.id}>             
             <h2 className="font-bold text-lg">{task.title}</h2>
             <hr className="my-2 w-full"  />
             <p>{task.desc}</p>
             <hr className="my-2" />
             <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3 mt-4">
             <span className="flex gap-2"><Phone />Telefon:<p className="font-bold"> {task.mobileNumber}</p></span>
             <span className="flex gap-2"><Wallet />Cena:<p className="font-bold"> {task.price} kč</p></span>
             <span className="flex gap-2"><Landmark />Lokalita:<p className="font-bold"> {task.city} - {task.postcode}</p></span>
             <span className="flex gap-2"><Grid2X2 />Kategorie:<p className="font-bold">{task.category}</p></span>
             </div>
             {/* Jenom uživatel který položku vytvořil, uvidí možnost DELETE/ UPDATE/ IMPORT IMAGE*/}
             {userId !== task.user_id &&
             <>
              <div className="mt-4 pb-4 flex justify-end ">
                <ImageUpload variant={"compact"} pageId={params.id}  />
              </div>
              <div className="w-full flex gap-4 mt-4">
                <DeleteTaskForm taskId={task.id} className="" />
                <EditTaskForm task={task} className="" />
              </div>          
             </>
              }
            </div>
          ))}         
      </div>
    </section>
  );
};

export default DetailAdPage;
