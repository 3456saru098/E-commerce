
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

import { Pagination } from 'swiper/modules';
import sliderimageone from "../../public/slider1.png"
import sliderimagetwo from "../../public/sliderimg2.png"

export default function HeroSectionSlider() {
    return (
        <div>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-8/12 mx-auto rounded-md">
                <SwiperSlide>
                    <img className='h-[65vh] object-cover' src={sliderimageone} alt="slider-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[65vh] object-cover' src={sliderimagetwo} alt="slider-image" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
