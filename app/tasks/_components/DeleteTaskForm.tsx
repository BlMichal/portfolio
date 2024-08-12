'use client'

import { deleteTask } from "@/lib/actions"
import { useState } from "react"

type DeleteImageProps = {
    id : string,
    className?: string
}

export default function EditTodo({ id , className }:DeleteImageProps) {

    const [showModal, setShowModal] = useState(false) 
    
    return (
        <>
            
            <button onClick={() => setShowModal(true)} className={`bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 border-2 ${className}`}>
                DELETE
            </button>
            {showModal && (
                <dialog className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-95 flex justify-center items-center px-4 z-50">
                    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span className="text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                        <form action={deleteTask} onSubmit={() => setShowModal(false)} className="mt-4">
                            <label htmlFor="id" className="text-white">Prejete si smazat tento TASK ?</label>
                            <input
                                type="hidden"
                                name="id"
                                value={id}                               
                            />
                            <div className="flex gap-x-8 mt-4">
                            <button onClick={() => setShowModal(false)} className="w-full bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded">
                                CANCLE
                            </button>
                           <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                DELETE
                            </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </>
    )
}