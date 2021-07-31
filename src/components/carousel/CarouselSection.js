import s from './carousel.module.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);


const CarouselSection = () => {
    
    return (
        <div className={s.wrapper}>
            <h2>Lorem ipsum dolor <br></br>
                sit amet conset</h2>
                <div className={s.whiteBlock}></div>
                <a className={s.arrowLeft} href=''></a>
                <a className={s.arrowRight} href=''></a>
           
            <>
            
                <Swiper navigation={true} 
                
                
                
                
                className={s.swiper}>
                    <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
               
                </Swiper>
            </>

        </div>
    )
}

export default CarouselSection;