'use client'

import { useState } from "react"


const FilterBar = ({ inputValue }) => {

  return (
    <div className="mx-8 py-2 bg-gray-500/20 rounded-2xl border-customColor1 border-2 ">


      <form className="max-w-sm mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Hledej</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={(e) => inputValue(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg" placeholder="Vyhledej inzerát" required />

        </div>
      </form>

    </div>

  )
}

export default FilterBar