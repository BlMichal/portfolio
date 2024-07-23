import { ArrowDownToLine, ClipboardList } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Dropdown from './Dropdown'

const Header = () => {


  return (


    <header className='mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm'>
      <section className='flex items-center gap-10'>
        <Image src={'/logo.png'} alt='Logo' width={25} height={25} />
        <nav className='flex items-center gap-4 transition-all'>
          <button  className='flex items-center relative hover:text-black text-neutral-400 group px-2 py-3 transition-all group'>
            <span className='transition-all text-xl'>Home</span>
            <span className='rotate-180 group-hover:rotate-0 transition-all'><ArrowDownToLine /></span>
            <div className='absolute top-12 w-auto hidden flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-[999]'>
              <div className='flex flex-col px-4 py-2 items-center gap-y-4'>
                {/* Button instead of Link because of hydratation error */}
                <Link href={'/tasks'} className='flex'>                 
                  <span className='whitespace-nowrap'>TASKS LIST</span>
                </Link>
              </div>
            </div>
          </button>
        </nav>
      </section>
      <section className='flex items-center gap-8'>
        <button className='h-fit text-neutral-400 transition-all hover:text-black/80'>Login</button>
        <button className='h-fit border-2 border-neutral-400 px-4 py-2 rounded-xl text-neutral-400 transition-all hover:text-black/80'>Register</button>

      </section>
    </header>









    // <header className='flex justify-between px-10'>
    //     {/*LOGO*/}
    //     <div>
    //         LOGO
    //     </div>
    //      {/*Navigation*/}
    //      <nav className='flex justify-between'>
    //        <ul className='flex gap-16 pr-48'>
    //         <li>HOME</li>
    //         <li>PROJECT</li>
    //         <li>TASKS</li>
    //         <li>KONTAKT</li>
    //         </ul>
    //         <ul className='flex gap-2'>
    //             <li>SIGN IN</li>
    //             <li>SIGN OF</li>
    //         </ul>
    //     </nav>



    // </header>
  )
}

export default Header