'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';


export async function createTask(formData) {

  const supabase = createClient();

  const desc = formData.get('desc');  
  const userId = (await supabase.auth.getUser()).data.user?.id;  

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ desc: desc,user_id:userId }]);
    
  if (error) {    
    throw new Error('Failed to insert data');
  }

  revalidatePath('/tasks');
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
  const desc = formData.get('desc')

  const { data, error } = await supabase
  .from('tasks')
  .update({ desc })
  .eq('id', id)
  .select()

  if (error) {
    console.log(error)
  } 
  revalidatePath('/'); 
}
