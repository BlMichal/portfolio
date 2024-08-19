"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  const supabase = createClient();

  const title = formData.get("title");
  const price = formData.get("price");
  const mobileNumber = formData.get("mobileNumber");
  const postcode = formData.get("postcode");
  const city = formData.get("city");
  const category = formData.get("category");
  const desc = formData.get("desc");

  const userId = (await supabase.auth.getUser()).data.user?.id;

  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        title: title,
        price: price,
        mobileNumber: mobileNumber,
        postcode: postcode,
        city: city,
        category: category,
        desc: desc,
        user_id: userId,
      },
    ])
    .select();

  if (data) {
    revalidatePath("/tasks");
    redirect(`/tasks/create/${data[0].id}/`);
  }

  if (error) {
    throw new Error("Chyba při ukládání dat");
  }
}

export async function deleteTask(formData: FormData) {
  const supabase = createClient();

  const id = formData.get("id");

  const { data, error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    throw new Error("Chyba při mazání dat");
  }

  revalidatePath("/");
  redirect("/");
}

export async function updateTask(formData: FormData) {
  const supabase = createClient();

  const id = formData.get("id");
  const title = formData.get("title");
  const price = formData.get("price");
  const mobileNumber = formData.get("mobileNumber");
  const city = formData.get("city");
  const postcode = formData.get("postcode");
  const category = formData.get("category");
  const desc = formData.get("desc");

  const { data, error } = await supabase
    .from("tasks")
    .update({ desc, price, postcode, title, city, category, mobileNumber })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Chyba při ukládání dat");
  }
  
  revalidatePath("/");
}

export async function deleteImages(formData) {
  
  const supabase = createClient();

  const id = formData.get("id");
  const imageUrl = formData.get("imageUrl");

  const imageId = imageUrl.split("/").pop();  

  const { error } = await supabase.from("tasksImages").delete().eq("id", id);

  const { data, error: errorBucket } = await supabase.storage
    .from("adImages")
    .remove([imageId]);

  if (error || errorBucket) {
    throw new Error("Chyba při mazání dat");
  }

  revalidatePath(`/tasks/${id}`);
}