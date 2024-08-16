"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import SubmitButton from "./SubmitButton";
import Image from "next/image";

type UploadFormProps = {
  variant: "default" | "compact";
  pageId: string;
};

export default function ImageUpload({ variant, pageId }: UploadFormProps) {

  const labelClass = {
    default:
      "flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500",
    compact:
      "flex=flex-col items-center justify-center w-full h-20 border-2 my-1 border-purple-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500",
  };

  const pathname = usePathname()
  const supabase = createClient();
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const imageFiles = e.target.files as File[];
      setFiles(imageFiles);
      const preview = Array.from(imageFiles).map((file) => URL.createObjectURL(file));
      setImagePreview(preview);
    }
  };

  const handleFileUpload = async () => {
    if (!files) {
      return null;
    }

    for (const file of files) {
      const image = file;
      const fileExt = image.name.split(".").pop();
      const randomNumberGenerator = (Math.random() + 1).toString(36).substring(7) + Date.now().toString();
      const fileName = `${randomNumberGenerator}.${fileExt}`;

      const { error } = await supabase.storage
        .from("adImages")
        .upload(fileName, file);

      if (error) {
        {
          /*ERROR*/
        }
      } else {
        const imageUrl = process.env.NEXT_PUBLIC_SUPABASE_BUCKET + fileName;
        const { data, error } = await supabase
          .from("tasksImages")
          .insert([
            {
              imageUrl: imageUrl,
              id_tasks: pageId,
            },
          ])
          .select();
      }
    }
    setImagePreview([])
    
    if (pathname === `/tasks/create/${pageId}`) {
      router.push('/tasks')
    }
    else {
      router.refresh()
    }
  };

  return (
    <form
      action={handleFileUpload}
      className="md:w-4/6 w-5/6 flex flex-col items-end"
    >
      {imagePreview.length > 0 && (
        <div className="max-w-7xl flex flex-wrap my-1">
          {imagePreview.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={96}
              height={96}
              alt={`Preview ${index}`}
              className="object-contain"
            />
          ))}
        </div>
      )}
      <label htmlFor="dropzone-file" className={labelClass[variant]}>
        <div className="flex flex-col items-center justify-center md:pt-5 md:pb-6">
          {/* SVG */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Kliknout</span> a vybrat obrázek
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            formát SVG, PNG, JPG
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
          accept="image/png, image/gif, image/jpg"
        />
      </label>
      <SubmitButton clasName='border-2 w-28' btnType='submit' />
    </form>
  );
}
