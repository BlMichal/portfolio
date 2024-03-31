'use client'

import { useState } from 'react'

import Image from 'next/image'

import React from 'react'
import Logo from './../public/newsletter/illustration-sign-up-desktop.svg'

const NewsLetter = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setError('');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError('Valid email required.');
            return;
        }
        setEmail('');
    };

    const validateEmail = (email: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    };

    return (
        <section className='flex  justify-center'>
            <div className='flex flex-col-reverse lg:flex-row  bg-white mt-20 p-6 rounded-3xl '>
                <div className='flex flex-col gap-y-5 justify-center m-8'>
                    <h1 className='text-6xl'>Stay Update</h1>
                    <p>Join 60,000 product managers receiving monthly updates on:</p>
                    <span className='flex gap-x-5'>
                        <Image src={'./../newsletter/icon-list.svg'} width={20} height={20} alt='icon list' />
                        <p>Product discovery and building what matters</p>
                    </span>
                    <span className='flex gap-x-5'>
                        <Image src={'./../newsletter/icon-list.svg'} width={20} height={20} alt='icon list' />
                        <p>Measuring to ensure updates are a success</p>
                    </span>
                    <span className='flex gap-x-5'>
                        <Image src={'./../newsletter/icon-list.svg'} width={20} height={20} alt='icon list' />
                        <p>And much more!</p>
                    </span>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>

                        <span className='flex justify-between'>
                            <label htmlFor="email" className="font-bold">
                                Email address:
                            </label>
                            {error && (
                                <span className="text-red-500 ">{error}</span>
                            )}
                        </span>

                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                            className={`border border-gray-500 pl-2 py-4 rounded-lg ${error && 'border-red-500'
                                }`}
                        />


                        <button type="submit" className='text-white font-bold bg-gray-600 py-4 rounded-lg hover:bg-orange-600'>Subscribe to monthly newsletter</button>
                    </form>



                </div>
                <div className=''>
                    <Image src={Logo} alt="Icon list" width={400} height={593} />
                </div>


            </div>
        </section>
    )
}

export default NewsLetter
