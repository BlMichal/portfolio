"use client";

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import ImageUpload from '../../_components/ImageUpload';

const UploadAdvertisementisementImages = ({ params }) => {

  const router = useRouter();

  // Use useCallback to memoize the CheckIfExist function
  const CheckIfExist = useCallback(async () => {
    const supabase = createClient();

    const { data: ads, error } = await supabase
      .from("TabAdvertisement")
      .select("id")
      .eq("id", params.id)
      .single();

    if (error || !ads) {
      router.replace('/advertisement/create');
      toast.error(
        <span className='w-60 h-20 flex items-center'>
          Tento záznam neexistuje!
        </span>
      );
    }
  }, [params.id, router]); 

  useEffect(() => {
    CheckIfExist();
  }, [CheckIfExist]);

  return (
    <section className='flex flex-col items-center min-h-screen-content-sm-footer md:min-h-screen-content-md-footer'>
      <h1 className='font-mono text-3xl font-semibold'>Vytvořit inzerát</h1>
      <p className='my-2'>
        <span className='text-purple-700 font-bold'>2 krok: </span>
        Nahrajte fotografie k inzerátu
      </p>
      <ImageUpload variant='default' pageId={params.id} />
    </section>
  );
};

export default UploadAdvertisementisementImages;
