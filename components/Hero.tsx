import Image from 'next/image'


const Hero = () => {
    return (
        <section className=''>
            <div className=''>
               
                    <h2 className='font-bold text-3xl'>MICHAL BLAzEK</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fuga rem aspernatur eligendi amet! Commodi magnam quasi, fugiat aperiam, eius hic in harum recusandae molestias nam atque totam dolor enim?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati distinctio voluptas eaque autem at odit illo voluptate ducimus molestiae fugit id ipsa libero iste explicabo reiciendis incidunt, qui fugiat!</p>             
            </div>
           <div className=''>
           <Image src='/assets/earth-sphere.png' quality={100} priority fill alt='Hero light bulb image' className='object-contain' /> 
           </div>
        </section>
    )
}

export default Hero