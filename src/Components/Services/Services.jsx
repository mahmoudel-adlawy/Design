import React from 'react'
import style from './Services.module.css'
import img2 from '../../img/glasses.png'
import img3 from '../../img/humble.png'
import pdf from '../../Components/Pdf/Front-End.pdf'

export default function Services() {
  return (
    <>
    <div className={`container  ${style.serv}`}>
    <div className='row'>
        <div className='col-md-6 my-5'>
            <h1>My Awesome <br /> <span className={style.se}>Services</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officia eius unde quia distinctio reprehenderit deleniti molestias est odio asperiores.</p>

           <a href={pdf} className={`btn ${style.btn}`} download>Download Cv</a>

        </div>
        <div className={`col-md-6 my-5 ${style.car}`}>
            <div className={style.car1}>
                <img src={img3} className=' py-2 w-75' alt="" />
                <h3>Design</h3>
                <p>Lorem ipsum dolor, <br /> sit amet consectetur </p>
                <a href="" className={`btn ${style.btnc}`}>Learn more</a>

            </div>
            <div className={style.car2}>
                <img src={img2} className='py-2 w-75' alt="" />
                <h3>Design</h3>
                <p>Lorem ipsum dolor, <br /> sit amet consectetur </p>
                <a href="" className={`btn ${style.btnc}`}>Learn more</a>

            </div>
            <div className={style.car3}>
                <img src={img3} className='py-2 w-75' alt="" />
                <h3>Design</h3>
                <p>Lorem ipsum dolor, <br /> sit amet consectetur </p>
                <a href="" className={`btn ${style.btnc}`}>Learn more</a>

            </div>

        </div>

    </div>

    </div>
    </>
  )
}
