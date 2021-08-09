import s from './carousel.module.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Slide from '../slide/Slide';
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
import pic4 from '../../images/pic4.png';
import pic5 from '../../images/pic5.png';
import pic6 from '../../images/pic6.png';


// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const carouselContent = [
    pic1, pic2, pic3, pic4, pic5, pic6
]

const CarouselSection = () => {

    const breakpoint = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 1000,
    }

    return (
        <div className={s.wrapperCar}>
            <h2>Lorem ipsum dolor <br></br>
                sit amet conset</h2>
            <div className={s.whiteBlock}></div>
            <>
    
                <Swiper navigation={true}
                    loop={true}
                    // slidesPerGroup={5}
                    // spaceBetween={0}

                    className={s.swiper}>

                    {carouselContent.map(image =>
                        <SwiperSlide >
                            <Slide key={image.index} image={image} />
                        </SwiperSlide>
                    )}
                </Swiper>
                 
            </>
        </div>
    )
}

export default CarouselSection;