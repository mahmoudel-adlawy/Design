import React from 'react'
import style from './Works.module.css'
import img3 from '../../img/Upwork.png'
import img4 from '../../img/Shopify.png'
import img5 from '../../img/Facebook.png'
import img6 from '../../img/fiverr.png'
import img7 from '../../img/amazon.png'
import 'animate.css';



export default function Works() {
    return (
        <>
            <div className={`container ${style.work}`}>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Works for All these <br /> <span className={style.cli}>Brands & Clints</span></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatibus doloremque quae aperiam voluptas cum, sequi quo temporibus cupiditate, doloribus laudantium vitae blanditiis, veniam explicabo!</p>

                        <a href="" className={`btn ${style.btn}`}>Here me</a>

                    </div>
                    <div className={`col-md-6  ${style.icon}`}>

                        <div className={`animate__animated animate__rotateIn ${style.circle}`}>
                            <div className={style.cir1}>
                                <img src={img3} className='w-100 ' alt="" />

                            </div>
                            
                            <div className={style.cir2}>
                                <img src={img4} className='w-100 ' alt="" />

                            </div>

                            <div className={style.cir3}>
                                <img src={img5} className='w-100 ' alt="" />

                            </div>
                            <div className={style.cir4}>
                                <img src={img6} className='w-100 ' alt="" />

                            </div>
                            <div className={style.cir5}>
                                <img src={img7} className='w-100 ' alt="" />

                            </div>

                        </div>




                    </div>


                </div>
            </div>
        </>
    )
}
