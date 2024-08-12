'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export async function createTask(formData:FormData) {
  
  const supabase = createClient();

  const title = formData.get('title');  
  const price = formData.get('price');  
  const mobileNumber = formData.get('mobileNumber');  
  const postcode = formData.get('postcode');  
  const city = formData.get('city');  
  const category = formData.get('category');  
  const desc = formData.get('desc');  
 

  const userId = (await supabase.auth.getUser()).data.user?.id;  
  
  const { data, error } = await supabase
    .from('tasks')
    .insert([{
      title: title,
      price: price,
      mobileNumber: mobileNumber,
      postcode: postcode,
      city: city,
      category: category,
      desc: desc,
      user_id: userId
      
    }])
    .select()

    
  if(data){
    revalidatePath('/tasks');
    redirect(`/tasks/create/${data[0].id}/`)
  } 
    
  if (error) {    
    throw new Error('Failed to insert data');    
  }

  
}

export async function deleteTask(formData) {

  const supabase = createClient();

  const id = formData.get('id');

  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)


  if (error) {
    console.log(error)
  } 
  revalidatePath('/');
  redirect('/')
}


export async function updateTask(formData) {

  const supabase = createClient();

  const id = formData.get('id');
  const desc = formData.get('desc');
  const price = formData.get('price');  
  const postcode = formData.get('postcode');  
  const title = formData.get('title');  
  const city = formData.get('title');  

 

  const { data, error } = await supabase
  .from('tasks')
  .update({ desc,price,postcode,title,city})
  .eq('id', id)
  .select()

  if (error) {
    console.log(error)
  } 
  revalidatePath('/'); 
}

export async function deleteImages(formData) {

  const supabase = createClient();

  const id = formData.get('id');
  const imageUrl = formData.get('imageUrl');

  const { error } = await supabase
    .from('tasksImages')
    .delete()
    .eq('id', id)

    const imageId = imageUrl.split('/').pop()

  const { data, error: errorBucket } = await supabase
    .storage
    .from('adImages')
    .remove([imageId])


  if (error) {
    console.log(error)
  } 
  revalidatePath(`/tasks/${id}`);
  
}