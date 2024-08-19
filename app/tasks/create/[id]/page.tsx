"use client"

import ImageUpload from '@/app/tasks/_components/ImageUpload'
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const CreateAdvertisement = ({params}) => {

  useEffect(() => {
    CheckIfExist();
  }, []);

    const router = useRouter();

  const CheckIfExist = async () => {

    const supabase = createClient();

    const { data: task, error } = await supabase
      .from("tasks")
      .select("id")
      .eq("id", params.id)
      .single();
    
    if (error || !task) {      
     router.replace('/tasks/create');
     toast.error(<span className='w-60 h-20 flex items-center'>Tento záznam neexistuje!</span>)
    }
  };

  return (
    <section className='flex flex-col items-center min-h-screen-content-md-footer md:min-h-screen-content-footer'>
      <h1 className='font-mono text-3xl font-semibold'>Vytvořit inzerát</h1>
      <p className='my-2'><span className='text-purple-700 font-bold'>2 krok: </span>Nahrajte fotografie k inzerátu</p>
    <ImageUpload variant='default' pageId={params.id}/>
    </section>
  )
}

export default CreateAdvertisement