import ImageUpload from '@/app/tasks/_components/ImageUpload'

const page = ({params}) => {

  return (
    <section className='flex justify-center items-center h-screen'>
    <ImageUpload pageId={params.id}/>
    </section>
  )
}

export default page