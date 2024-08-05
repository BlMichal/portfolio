import DeleteTaskForm from '@/app/tasks/_components/DeleteTaskForm'
import EditTaskForm from '@/app/tasks/_components/EditTaskForm'
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import ImageSwiperGallery from '../_components/ImageSwiperGallery';

const DetailTasksPage = async ({ params }) => {

  const supabase = createClient();

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('id', params.id)

  const { data: tasksImages } = await supabase
    .from('tasksImages')
    .select('*')
    .eq('id_tasks', params.id)
    .order('id', { ascending: true })


    
  return (
    <section className='bg-slate-800 min-h-screen'>
      <div>
        <ImageSwiperGallery images={tasksImages}/>        
      </div>
      <div>
        {tasks?.map((task) => (
          <div key={task.id}>
            <h2 className='text-3xl text-white'>{task.desc}</h2>
            <p className='text-3xl text-white'>Tohle je id stranky:{task.id}</p>
            <DeleteTaskForm id={task.id} className="" />
            <EditTaskForm task={task} className="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default DetailTasksPage