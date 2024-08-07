'use client'

import { updateTask } from "@/lib/actions"
import { useState } from "react"

type form = {
    desc : string
    title: string
    price : number
    postcode: number
    city: number
}

export default function EditTodo({ task, className }) {

    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({        
        desc: task.desc,
        title: task.title,
        price: task.price,
        postcode: task.postcode,
        city: task.city,

    })   

    

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <>
            <button onClick={() => setShowModal(true)} className={`bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 border-2 ${className}`}>
                Edit
            </button>
            {showModal && (
                <dialog className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center px-4 z-50">
                    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span className="text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                        <form action={updateTask} onSubmit={() => setShowModal(false)} className="mt-4">
                            <input
                                type="hidden"
                                name="id"
                                value={task.id}
                            />
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-300 mb-2">Název</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-gray-300 mb-2">Cena</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="postcode" className="block text-gray-300 mb-2">PSČ (11000)</label>
                                <input
                                pattern="[0-9]{5}"
                                maxLength={5}
                                    type="number"
                                    id="postcode"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-300 mb-2">Město</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="desc" className="block text-gray-300 mb-2">Popis</label>
                                <textarea
                                    rows={4}
                                    id="desc"
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                           <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Uložit
                            </button>
                        </form>
                    </div>
                </dialog>
            )}
        </>
    )
}