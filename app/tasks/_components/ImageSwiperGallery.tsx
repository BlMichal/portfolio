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

const ImageSwiperGallery = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInterface | null>(null)

    return (
        <section className="bg-white -z-10">
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-96 md:w-1/3 w-full" >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="flex items-center justify-center">
                            <Image src={image.imageUrl} sizes="100vw" fill alt="Galerie fotek inzerátu" className="object-contain -z-10" />
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
                className="h-[150px] w-full">
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="w-full h-full mt-3 flex justify-center items-center">
                            <Image src={image.imageUrl} width={150} height={150} alt="Galerie fotek inzerátu" className=" border-4 border-green-600 object-contain -z-10" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default ImageSwiperGallery