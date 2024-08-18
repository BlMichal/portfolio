'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { useState } from "react"
import Image from "next/image"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperInterface from "swiper"
import DeleteImageForm from "./DeleteImageForm"



const ImageSwiperGallery = ({ images , user }) => {

   console.log(images)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInterface | null>(null)
    
    return (
        <section className="bg-black py-2">
            {images.length > 0 ?  
            <>       
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-96 md:w-2/3 w-full mb-2" >
                {images.map((image:AdImagesProps) => (
                    <SwiperSlide key={image.id}>
                        <div className="flex items-center justify-center">
                            <Image src={image.imageUrl} fill alt="Fotka inzerátu" className="object-contain px-1"/>                                                                                  
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>    
                    
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={images.length}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-[100px] md:w-4/5 w-full">
                {images.map((image:AdImagesProps) => (
                    <SwiperSlide key={image.id}>
                        <div className="h-full relative cursor-pointer">
                            <Image src={image.imageUrl} sizes="100vw" fill alt="Galerie fotek inzerátu" className="border-2 rounded-md border-gray-600 object-contain z-10" />                            
                            {user === image.tasks.user_id &&
                            <DeleteImageForm id={image.id} imageUrl={image.imageUrl} />                            
                            }
                        </div>                        
                    </SwiperSlide>
                ))}
            </Swiper> 
            </>
            : <h1 className="text-white text-2xl text-center py-8">Inzerát neobsahuje fotografie</h1> }               
        </section>
    )
}

export default ImageSwiperGallery