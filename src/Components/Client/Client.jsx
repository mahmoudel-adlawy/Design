import React from 'react'
import style from './Client.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import shop from '../../img/profile1.jpg'
import shop1 from '../../img/profile2.jpg'
import shop2 from '../../img/profile3.jpg'
import shop3 from '../../img/profile4.jpg'
import shop4 from '../../img/profile5.jpg'
import shop5 from '../../img/profile6.jpg'
import 'swiper/css';
import 'swiper/css/pagination';



export default function Client() {
    return (
        <>
            <div className={`container ${style.cli}`}>
                <Swiper  modules={[Pagination]} navigation
                    pagination={{ clickable: true }} className={style.mySwiper}>
                    <SwiperSlide>
                        <div className={style.text}>
                            <img className={style.image} src={shop} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.text}>
                            <img className={style.image} src={shop1} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.text}>
                            <img className={style.image} src={shop2} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.text}>
                            <img className={style.image} src={shop3} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.text}>
                            <img className={style.image} src={shop4} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.text}>
                            <img className={style.image} src={shop5} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}
