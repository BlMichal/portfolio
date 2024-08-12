'use client'

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { revalidatePath } from "next/cache";

type UploadFormProps = {
    variant: 'default' | 'compact' 
    pageId: string; 
};

export default function ImageUpload({ variant, pageId }: UploadFormProps) {

    const labelClass = {
        default: "flex flex-col items-center justify-center w-full h-64 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500",
        compact: "flex flex items-center justify-center border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500",
    };

    const supabase = createClient();
    const router = useRouter()
    const [files, setFiles] = useState<File[]>([]);
    const [imagePreview, setImagePreview] = useState([]);


    const handleFileChange = (e) => {
        if (e.target.files) {
            const imageFiles = e.target.files
            setFiles(imageFiles);
        }
    }

    const handleFileUpload = async () => {
        if (!files) {
            return null;
        }

        for (const file of files) {
            const image = file
            const fileExt = image.name.split(".").pop();
            const randomNumberGenerator = (Math.random() + 1).toString(36).substring(7) + Date.now().toString()
            const fileName = `${randomNumberGenerator}.${fileExt}`;

            const {error } = await supabase.storage.from('adImages').upload(fileName, file);

            if (error) {
                {/*ERROR*/ }
            } else {
                const imageUrl = process.env.NEXT_PUBLIC_SUPABASE_BUCKET + fileName;
                const { data, error } = await supabase
                    .from("tasksImages")
                    .insert([
                        {
                            imageUrl: imageUrl,
                            id_tasks: pageId
                        },
                    ])
                    .select();

                router.push('/tasks')
                revalidatePath('/tasks/')
            }
        }
    }

    return (
        <form action={handleFileUpload} className="md:w-4/6 w-5/6 flex flex-col items-end">
            <label htmlFor="dropzone-file" className={labelClass[variant]}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {/* SVG */}
                    <p className="mb-2 text-slm text-gray-500 dark:text-gray-400"><span className="font-semibold">Kliknout</span> nebo přetáhnout obrázek</p>
                    <p className="text-xs telxt-gray-500 dark:text-gray-400">formát SVG, PNG, JPG</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} multiple accept="image/png, image/gif, image/jpg" />
            </label>
            <SubmitButton/>            
        </form>
    )
}

