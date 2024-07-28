'use client'

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";




const Page = () => {

    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFiles(e.target.files);
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

            } else {

                const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + fileName;
                console.log(imageUrl);
                const { data, error } = await supabase
                    .from("tasksImages")
                    .insert([
                        {
                            imageUrl: imageUrl,
                        },
                    ])
                    .select();
            }

        }
    }

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">
                <input
                    className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
            </label>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleFileUpload}
            >
                Upload Files
            </button>
        </div>
    )
}

export default Page