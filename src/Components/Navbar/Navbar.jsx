import React from 'react'
import style from './Navbar.module.css'
import Togle from '../Togle/Togle'

export default function Navbar() {
    return (
        <>
            <nav className={` ${style.nav} navbar navbar-expand-md `}>
                <div className="container-fluid">
                    <a className={`${style.nav1} navbar-brand my-2`} href="#">Mahmoud Eladl</a> 
                    <Togle></Togle>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                           
                        </ul>
                    </div>
                    <button className={style.btn}>Contact  us</button>
                </div>
            </nav>

        </>
    )
}
