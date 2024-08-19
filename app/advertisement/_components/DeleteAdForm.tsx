'use client'

import { deleteAd } from "@/lib/actions"
import { Trash2 } from "lucide-react"
import { useState } from "react"



export default function DeleteAdForm({ advertisementId, className }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)} className={`flex items-center justify-center gap-1 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 ${className}`}>
                <Trash2 /><span>Smazat</span>
            </button>
            {showModal && (
                <dialog className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-95 flex justify-center items-center px-4 z-50">
                    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span className="text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                        <form action={deleteAd} onSubmit={() => setShowModal(false)} className="mt-4">
                            <label htmlFor="id" className="text-white">Přejete si smazat tento inzerát ?</label>
                            <input
                                type="hidden"
                                name="id"
                                value={advertisementId}
                            />
                            <div className="flex gap-x-8 mt-4">
                                <button onClick={() => setShowModal(false)} className="w-full bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded">
                                    ZPĚT
                                </button>
                                <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    SMAZAT
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </>
    )
}