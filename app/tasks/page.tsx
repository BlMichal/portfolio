
import DeleteTaskForm from '@/components/DeleteTaskForm'
import EditTaskFom from '@/components/EditTaskForm'
import { supabase } from '@/utils/supabase'
import Link from 'next/link'


export default async function TaskPage() {

  const { data: tasks, error } = await supabase.from('tasks').select()

  return (
    <section className='mt-5 mx-10'>
      <div className='grid grid-cols-5 gap-2'>
        {tasks?.map((task) => (          
            <div key={task.id} className='border w-full h-[250px] overflow-hidden bg-slate-800'>
              <Link href={`/tasks/${task.id}`}>
                <li className='text-2xl text-white text-center list-none'>{task.desc}</li>
              </Link>
              <DeleteTaskForm id={task.id} />
              <EditTaskFom task={task} />
            </div>
          ))}
      </div>
    </section>
  )
}
