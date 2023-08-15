import React from 'react'
import style from './Aut.module.css'

export default function Aut() {
  return (
    <>
    <div className={`container ${style.get}`}>
        <div className='row'>
            <div className={`col-md-6 ${style.get1}`}>
                <h1>
                    Get in Touch <br />
                    <span className={style.ora}>Contact me</span>
                </h1>

            </div>
            <div className={`col-md-6 ${style.get2}`}>
                <input className={style.inp} type="text" placeholder='Name' name="user" id="user" />
                <input className={style.inp} type="email" placeholder='email' name="email" id="email" />
                <input className={style.text} type="text" placeholder='mes' name="mes" id="mes" />

            </div>

        </div>

    </div>
    </>
  )
}
