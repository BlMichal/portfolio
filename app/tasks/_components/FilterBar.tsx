'use client'

import { useState } from "react"


const FilterBar = ({inputValue}) => { 
    
  return (
    <div className="w-full">
      <label htmlFor="textSearch"> Vyhledej</label>
        <input name="textSearch" onChange={(e) => inputValue(e.target.value)} type="text" />
    </div>
  )
}

export default FilterBar