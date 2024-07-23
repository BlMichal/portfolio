import { ClipboardList } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Dropdown = () => {
  return (
    <Link href={'/tasks'} className='flex'>
    <span><ClipboardList /></span>
    <span className='whitespace-nowrap'>TASKS LIST</span>
 </Link>  
  )
}

export default Dropdown