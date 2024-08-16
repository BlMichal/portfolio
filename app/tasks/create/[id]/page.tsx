import ImageUpload from '@/app/tasks/_components/ImageUpload'

const CreateAdvertisement = ({params}) => {
  return (
    <section className='flex flex-col items-center min-h-screen-content'>
      <h1 className='font-mono text-3xl font-semibold'>Vytvořit inzerát</h1>
      <p className='my-2'><span className='text-purple-700 font-bold'>2 krok: </span>Nahrajte fotografie k inzerátu</p>
    <ImageUpload variant='default' pageId={params.id}/>
    </section>
  )
}

export default CreateAdvertisement