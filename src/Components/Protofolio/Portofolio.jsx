import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Portofolio.module.css'

import img1 from '../../img/sidebar.png'
import img2 from '../../img/ecommerce.png'
import img3 from '../../img/musicapp.png'
import img4 from '../../img/hoc.png'
import 'swiper/css';



export default function Portofolio() {
    return (
        <>
            <div className={`container ${style.swip}`}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className={style.port}

                >
                    <SwiperSlide><img src={img1} className={style.image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} className={style.image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className={style.image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img4} className={style.image} alt="" /></SwiperSlide>
                </Swiper>


            </div>
        </>
    )
}
