'use client'

import Image from 'next/image'
import NewsLetterForm from './NewsLetterForm'

const NewsLetter = () => {


    return (
        <section className='flex justify-center'>
            <div className=' flex flex-col-reverse  lg:flex-row  bg-white lg:mt-20 lg:p-6 lg:rounded-3xl'>
                <div className='flex flex-col gap-y-5 justify-center sm:max-w-[375px] sm:p-3 lg:max-w-full lg:mx-5'>
                    <h1 className='text-5xl lg:text-6xl'>Stay Update!</h1>
                    <p>Join 60,000 product managers receiving monthly updates on:</p>
                    <span className='flex gap-x-5'>
                        <Image src={'./../newsletter/icon-list.svg'} width={20} height={20} alt='icon list' />
                        <p>Product discovery and building what matters</p>
                    </span>
                    <span className='flex gap-x-5'>
                        <Image src={'./../newsletter/icon-list.svg'} width={20} height={20} alt='icon list' />
                        <p>Measuring to ensure updates are a success</p>
                    </span>
                    <span className='flex gap-x-5 lg:mb-3'>
                        <Image src={'./../newsletter/icon-list.svg'} width={20} height={20} alt='icon list' />
                        <p>And much more!</p>
                    </span>

                    {/* Form */}
                    <NewsLetterForm />

                </div>
                <div className="">
                    {/* Image for large screens (lg) */}
                    <Image
                        src="/newsletter/illustration-sign-up-desktop.svg"
                        alt="Desktop signup image"
                        width={400}
                        height={592}
                        className="hidden lg:block"
                    />
                    {/* Image for (md) and (sm) screens */}
                    <Image
                        src="/newsletter/illustration-sign-up-mobile.svg"
                        alt="Mobile signup image"
                        width={375}
                        height={284}
                        className="block lg:hidden mb-5"
                    />
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
