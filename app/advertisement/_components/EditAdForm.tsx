"use client";

import { updateAd } from "@/lib/actions";
import { PencilRuler } from "lucide-react";
import { useState } from "react";


export default function EditAdForm({ advertisement, className }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    desc: advertisement.desc,
    title: advertisement.title,
    price: advertisement.price,
    postcode: advertisement.postcode,
    city: advertisement.city,
    category: advertisement.category,
    mobileNumber: advertisement.mobileNumber,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`flex items-center justify-center gap-1 bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 ${className}`}
      >
        <PencilRuler /><span>Upravit</span>
      </button>
      {showModal && (
        <div className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center md:px-4 z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md md:h-auto h-full overflow-y-auto">
            <span
              className="text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <form
              action={updateAd}
              onSubmit={() => setShowModal(false)}
              className="mt-4"
            >
              <input type="hidden" name="id" value={advertisement.id} />
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-300 mb-2">
                  Název
                </label>
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
                <label htmlFor="price" className="block text-gray-300 mb-2">
                  Cena
                </label>
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
                <label
                  htmlFor="mobileNumber"
                  className="block text-gray-300 mb-2"
                >
                  Mobil (606123456)
                </label>
                <input
                  pattern="[0-9]{9}"
                  maxLength={9}
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postcode" className="block text-gray-300 mb-2">
                  PSČ (11000)
                </label>
                <input
                  pattern="[0-9]{5}"
                  maxLength={5}
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-300 mb-2">
                  Město
                </label>
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
                <label htmlFor="desc" className="block text-gray-300 mb-2">
                  Kategorie
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-700 dark:focus:border-orange-400"
                  required
                >
                  <option disabled>Vyberte možnost</option>
                  <option value='Elektronika'>Elektronika</option>
                  <option value='Auto/Moto'>Auto/Moto</option>
                  <option value='Drogérie'>Drogérie</option>
                  <option value='Ostatní'>Ostatní</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="desc" className="block text-gray-300 mb-2">
                  Popis
                </label>
                <textarea
                  rows={4}
                  id="desc"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Uložit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
