import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
    return (
        <section className=' w-full min-h-screen grid lg:grid-cols-2 bg-hero-gradient'>
            <div className='mt-10 px-10 lg:mt-32 xl:ml-48'>               
                    <h2 className='font-bold text-3xl pb-5 '>PROJECT TITLE</h2>
                    <p className='max-w-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fuga rem aspernatur eligendi amet! Commodi magnam quasi, fugiat aperiam, eius hic in harum recusandae molestias nam atque totam dolor enim?</p>
                    <Link href={'/'}><button className='border mt-4 rounded-2xl p-4 bg-slate-500 hover:bg-slate-400 text-white'>TASKLIST</button></Link>
            </div>
           <div className=' w-full relative lg:row-span-1 row-span-5 lg:top-0 -top-1/4'>            
            <Image src='/assets/light-bulb.png' quality={100} priority fill alt='Hero light bulb image' className='object-contain' /> 
           </div>
        </section>
    )
}

export default Hero