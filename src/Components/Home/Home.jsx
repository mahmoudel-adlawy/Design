import React, { useEffect } from 'react'
import style from './Home.module.css'
import img1 from '../../img/Vector1.png'
import img2 from '../../img/Vector2.png'
import img3 from '../../img/WhatsApp Image 2023-03-29 at 16.33.29.jpg'
import img4 from '../../img/thumbup.png'
import img5 from '../../img/crown.png'
import img6 from '../../img/glassesimoji.png'
import 'animate.css';

export default function Home() {
   
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h1>HY ! I Am <br />
                <span className={style.hed}>Mahmoud Eladl</span>
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam veritatis ratione ducimus porro aperiam tempora provident tempore corporis accusamus enim.</p>
                <button className={style.btn}> Here me</button>

                <div className={style.icon}>
                <i className="fab fa-github-square fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                </div>


            </div>
            <div className={`col-md-6 my-3 ${style.dir}`}>
                <img src={img1} className={`animate__animated animate__zoomInUp  ${style.img1}`} alt="" />
                <img src={img2} className={`animate__animated animate__zoomInDown ${style.img2}`} alt="" />
                <img src={img3} className={`animate__animated animate__zoomInLeft ${style.img3}`} alt="" />
                <img src={img6} className={`animate__animated animate__backInLeft   ${style.img4}`  } alt="" />

                <div className={` animate__animated animate__bounceInDown  ${style.card}`}>
                    <img src={img5} className={style.img5} alt="" />
                    <h5 className='mt-3'>web <br /> devolper</h5>
                    
                </div>
                <div className={ ` animate__animated animate__bounceInRight  ${style.card1}`}>
                    <img src={img4} className={ `   ${style.img6}`} alt="" />
                    <h5 className='mt-3'>web <br /> devolper</h5>
                    
                </div>


            </div>

        </div>

    </div>

    </>
  )
}
