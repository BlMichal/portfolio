import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-10'>
        {/*LOGO*/}
        <div>
            LOGO
        </div>
         {/*Navigation*/}
         <nav className='flex justify-between'>
           <ul className='flex gap-16 pr-48'>
            <li>HOME</li>
            <li>PROJECT</li>
            <li>TASKS</li>
            <li>KONTAKT</li>
            </ul>
            <ul className='flex gap-2'>
                <li>SIGN IN</li>
                <li>SIGN OF</li>
            </ul>
        </nav>
        
            
        
                
    </header>
  )
}

export default Header