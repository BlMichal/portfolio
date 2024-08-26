"use client";

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import ImageUpload from '../../_components/ImageUpload';

const UploadAdvertisementImages = ({ params }:{params :{id:string}}) => {

  const router = useRouter();

  const [ifExist, setIfExist] = useState<AdProps | null>(null);

  const CheckIfExist = useCallback(async () => {

    const supabase = createClient();

    const { data, error } = await supabase
      .from("TabAdvertisement")
      .select("id")
      .eq("id", params.id)
      .single();

    if (error || !data) {
      router.replace('/advertisement/create');
      toast.error(
        <span className='w-60 h-20 flex items-center'>
          Tento záznam neexistuje!
        </span>
      );
    }
    setIfExist(data as AdProps)
  }, [params.id, router]); 

  useEffect(() => {
    CheckIfExist();
  }, [CheckIfExist]);

  return (
    <section className='flex flex-col items-center min-h-screen-content-sm-footer md:min-h-screen-content-md-footer'>
       {ifExist ? (
        <>
      <h1 className='font-mono text-3xl font-semibold'>Vytvořit inzerát</h1>
      <p className='my-2'>
        <span className='text-purple-700 font-bold'>2 krok: </span>
        Nahrajte fotografie k inzerátu
      </p>
      <ImageUpload variant='default' pageId={params.id} />
        </>
      ): null}
    </section>
  );
};

export default UploadAdvertisementImages;
