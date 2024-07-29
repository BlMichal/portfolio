'use client'

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadImage({pageId}) {

    const router = useRouter()
    const [files, setFiles] = useState<File[]>([]);
   

    const handleFileChange = async(e) => {
        if (e.target.files) {
            const imageFiles = e.target.files
            setFiles(imageFiles);            
        }
    }

    const handleFileUpload = async () => {
        if (!files) {
            console.log('No files selected');
            return;
        }

        const supabase = createClient();

        for (const file of files) {
            const image = file
            const fileExt = image.name.split(".").pop();
            const randomNumberGenerator = (Math.random() + 1).toString(36).substring(7) + Date.now().toString()
            const fileName = `${randomNumberGenerator}.${fileExt}`;

            const { error } = await supabase.storage.from('adImages').upload(fileName, file);
            console.log(error);


            if (error) {
           console.log
            } else {
                console.log('Jsem tu')
                const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + fileName;
                console.log(imageUrl);
                const { data, error } = await supabase
                    .from("tasksImages")
                    .insert([
                        {
                            imageUrl: imageUrl,
                            id_tasks: pageId                                                      
                        },
                    ])
                    .select();

                   console.log(data)
                   router.push('/tasks')
                    
            }
        }
    }

    return (
        <div className="md:w-4/6 w-5/6 flex flex-col items-end">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">                
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {/* SVG */}
                    <p className="mb-2 text-slm text-gray-500 dark:text-gray-400"><span className="font-semibold">Kliknout</span> nebo přetáhnout obrázek</p>
                    <p className="text-xs telxt-gray-500 dark:text-gray-400">formát SVG, PNG, JPG</p>
                </div>                
                <input id="dropzone-file" type="file" className="" onClick={handleFileChange} multiple accept="image/png, image/gif, image/jpg" />
            </label>           
            <button
                className="bg-orange-500 hover:bg-orange-700 text-white mt-6 font-bold py-2 px-4 rounded"
                onClick={handleFileUpload}
            >
                Uložit
            </button>
        </div >
    )
}

