'use server'

import { supabase } from '@/utils/supabase';
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';


export async function createTask(formData) {

  const desc = formData.get('desc');

  const { data, error } = await supabase
    .from('tasks')
    .insert({ desc });
  if (error) {
    console.error(error);
    throw new Error('Failed to insert data');
  }

  revalidatePath('/');
}

export async function deleteTask(formData) {

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


          