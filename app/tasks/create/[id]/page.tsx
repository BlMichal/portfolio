import ImageUpload from '@/app/tasks/_components/ImageUpload'

const page = ({params}) => {

  return (
    <section className='flex justify-center items-center min-h-screen-content'>
    <ImageUpload pageId={params.id}/>
    </section>
  )
}

export default page