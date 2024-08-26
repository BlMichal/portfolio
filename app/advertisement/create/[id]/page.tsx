

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import ImageUpload from '../../_components/ImageUpload';

const UploadAdvertisementImages = async ({ params }: { params: { id: string } }) => {

  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from("TabAdvertisement")
    .select("id")
    .eq("id", params.id)
    .eq("user_id",user?.id)    
    .single(); 

  if (error || !data) {
    redirect('/advertisement/create');
  }

  return (
    <section className='flex flex-col items-center min-h-screen-content-sm-footer md:min-h-screen-content-md-footer'>
      {data ? (
        <>
          <h1 className='font-mono text-3xl font-semibold'>Vytvořit inzerát</h1>
          <p className='my-2'>
            <span className='text-purple-700 font-bold'>2 krok: </span>
            Nahrajte fotografie k inzerátu
          </p>
          <ImageUpload variant='default' pageId={params.id} />
        </>
      ) : null}
    </section>
  );
};

export default UploadAdvertisementImages;
