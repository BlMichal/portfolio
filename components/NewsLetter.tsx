'use client'

import Image from 'next/image'
import NewsLetterForm from './NewsLetterForm'

const NewsLetter = () => {


    return (
        <section className='flex justify-center'>
            <div className=' flex flex-col-reverse lg:max-w-full sm:max-w-[375px] lg:flex-row  bg-white lg:mt-20 lg:p-6 lg:rounded-3xl'>
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

                    <NewsLetterForm />


                </div>
                <div className="">
                    {/* Image for large screens (lg) */}
                    <Image
                        src="/newsletter/illustration-sign-up-desktop.svg"
                        alt="Desktop signup image"
                        width={400} // Set the width
                        height={592} // Set the height
                        className="hidden lg:block" // Show for large screens
                    />
                    {/* Image for medium (md) and small (sm) screens */}
                    <Image
                        src="/newsletter/illustration-sign-up-mobile.svg"
                        alt="Mobile signup image"
                        width={375} // Set the width
                        height={284} // Set the height
                        className="block lg:hidden" // Show for medium and small screens
                    />
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
