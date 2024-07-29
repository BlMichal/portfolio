'use client'

import { updateTask } from "@/lib/actions"
import { useState } from "react"


export default function EditTodo({ task, className }) {

    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({        
        desc: task.desc        
    })   

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <>
            <button onClick={() => setShowModal(true)} className={`bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 border-2 ${className}`}>
                Edit
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
                    <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                        <form action={updateTask} onSubmit={() => setShowModal(false)} className="mt-4">
                            <input
                                type="hidden"
                                name="id"
                                value={task.id}
                            />
                            <div className="mb-4">
                                <label htmlFor="desc" className="block text-gray-300 mb-2">Description</label>
                                <input
                                    type="text"
                                    id="desc"
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                           <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}