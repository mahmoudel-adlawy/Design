import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <header className={style.foot}>
                <div className={style.h}>
                    <p>Mahmoud Eladl@Gmail.com</p>
                    <div className={style.icon}> 
                    <i class="fab fa-facebook-f fa-2x"></i>
                    <i class="fab fa-instagram-square fa-2x"></i>
                    <i class="fab fa-github fa-2x"></i>

                    </div>

                </div>
            </header>
        </>
    )
}
