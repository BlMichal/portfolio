"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAd(formData: FormData) {
  
  const supabase = createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  const title = formData.get("title");
  const price = formData.get("price");
  const mobileNumber = formData.get("mobileNumber");
  const postcode = formData.get("postcode");
  const city = formData.get("city");
  const category = formData.get("category");
  const desc = formData.get("desc");


  const { data, error } = await supabase
    .from("TabAdvertisement")
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
    revalidatePath("/advertisement");
    redirect(`/advertisement/create/${data[0].id}/`);
  }

  if(error){
    throw new Error(`Chyba při ukládání dat ${error.message}`);
  }
}

export async function deleteAd(formData: FormData) {
  const supabase = createClient();

  const id = formData.get("id");

  const { data, error } = await supabase.from("TabAdvertisement").delete().eq("id", id);

  if (error) {
    throw new Error(`Chyba při mazání dat ${error.message}`);
  }

  revalidatePath("/");
  redirect("/advertisement");
}

export async function updateAd(formData: FormData) {
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
    .from("TabAdvertisement")
    .update({ desc, price, postcode, title, city, category, mobileNumber })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(`Chyba při ukládání dat dat ${error.message}`);
    }

  revalidatePath("/");
}

export async function deleteAdImages(formData) {

  const supabase = createClient();

  const id = formData.get("id");
  const imageUrl = formData.get("imageUrl");

  const imageId = imageUrl.split("/").pop()

  const { error } = await supabase.from("TabAdsImages").delete().eq("id", id);

  const { data, error: errorBucket } = await supabase.storage
    .from("adImages")
    .remove([imageId]);

  if (error || errorBucket) {
    throw new Error("Chyba při mazání dat");
  }

  revalidatePath(`/advertisement/${id}`);
}