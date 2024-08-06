import DeleteTaskForm from '@/app/tasks/_components/DeleteTaskForm'
import EditTaskForm from '@/app/tasks/_components/EditTaskForm'
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import ImageSwiperGallery from '../_components/ImageSwiperGallery';
import Modal from '../_components/Modal';
import Link from 'next/link';

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

    async function onClose() {
      'use server'
      console.log("Modal close")      
    }

    async function onOk() {
      'use server'
      console.log("OK was clicked")      
    }



    
  return (
    <section className='bg-slate-800 min-h-screen'>
      <Modal title="Ukazka" onClose={onClose} onOk={onOk} >Modaal</Modal>
      <div>
        <ImageSwiperGallery images={tasksImages}/>        
      </div>
      <div>
        {tasks?.map((task) => (
          <div key={task.id}>
            <h2 className='text-3xl text-white'>{task.desc}</h2>
            <p className='text-3xl text-white'>Tohle je id stranky:{task.id}</p>
              <Link href={`/tasks/${params.id}?showDialog=open`}>DELETE</Link>
            {/* <DeleteTaskForm id={task.id} className="" /> */}
            <EditTaskForm task={task} className="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default DetailTasksPage