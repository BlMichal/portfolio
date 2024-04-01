'use client'

import { useState } from 'react'


const NewsLetterForm = () => {

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
        <>
        
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
              


        </>
    )
}

export default NewsLetterForm