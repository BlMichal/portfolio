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
import { useRouter } from "next/navigation"
import DeleteImageForm from "./DeleteImageForm"


type ImageProps = {
    id : string,
    imageUrl: string
}

const ImageSwiperGallery = ({ images }) => {

    const router = useRouter()
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInterface | null>(null)
    

    return (
        <section className="bg-black pt-2">
            {images.length > 0 ?  
            <>       
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-96 md:w-2/3 w-full mb-2" >
                {images.map((image: ImageProps) => (
                    <SwiperSlide key={image.id}>
                        <div className="flex items-center justify-center static">
                            <Image src={image.imageUrl} sizes="100vw" fill alt="Fotka inzerátu" className="object-contain -z-10" />                                                                                  
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>    
                    
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-[100px] md:w-4/5 w-full">
                {images.map((image:ImageProps) => (
                    <SwiperSlide key={image.id}>
                        <div className="md:w-32 w-full h-full relative cursor-pointer flex-1">
                            <Image src={image.imageUrl} sizes="100vw" fill alt="Galerie fotek inzerátu" className="border-4 border-gray-600 object-contain -z-10" />
                            <DeleteImageForm id={image.id} url={image.imageUrl} />                            
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