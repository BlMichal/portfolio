import { supabase } from '@/utils/supabase'
import DeleteTaskForm from '@/components/DeleteTaskForm'
import EditTaskForm from '@/components/EditTaskForm'

const DetailTasksPage = async({params}) => {

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('id', params.id ) 

  return (
    <section>
    <div className='bg-slate-800 min-h-screen'>
      {tasks?.map((task) => (
        <div key={task.id}>
          <h2 className='text-3xl text-white'>{task.desc}</h2>
          <p className='text-3xl text-white'>Tohle je id stranky:{task.id}</p>
          <DeleteTaskForm id={task.id} className=""/>
          <EditTaskForm task={task} className=""/>
        </div>
      ))}
    </div>
    </section>
  )
}

export default DetailTasksPage