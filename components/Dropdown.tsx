'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Dropdown = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return ( 
    <>    
    {isClient ? <Link
      href={'/tasks'} className='flex'>                 
        <span className='whitespace-nowrap'>TASKS LIST</span>
      </Link> : 'TASKS LIST'}     
    </>  
  )
}

export default Dropdown