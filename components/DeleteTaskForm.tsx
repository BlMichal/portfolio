'use client'

import { deleteTask } from "@/lib/actions"
import { useState } from "react"


export default function EditTodo({ id }) {

    const [showModal, setShowModal] = useState(false) 
    
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                DELETE
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
                    <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                        <form action={deleteTask} onSubmit={() => setShowModal(false)} className="mt-4">
                            <label htmlFor="id" className="text-white">Prejete si smazat tento TASK ?</label>
                            <input
                                type="hidden"
                                name="id"
                                value={id}                               
                            />
                            <div className="flex gap-x-8 mt-4">
                            <button onClick={() => setShowModal(false)} className="w-full bg-white hover:bg-blue-700 font-bold py-2 px-4 rounded">
                                CANCLE
                            </button>
                           <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                DELETE
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}