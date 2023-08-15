import React from 'react'
import style from './Degre.module.css'

export default function Degre() {
    return (
        <>
            <div className={`container ${style.deg}`}>
                <div className='row'>
                    <div className={`col-12 ${style.degr}`}>
                        <div >
                            <div className={style.deg1}>
                                <p>2+</p>
                            </div>
                            <h3 className='my-2'>Years <br /><span className={style.ora}>exprince</span></h3>
                        </div>
                        <div >
                            <div className={style.deg1}>
                                <p>20+</p>
                            </div>
                            <h3 className='my-2'>Completed <br /><span className={style.ora}>Project</span></h3>
                        </div>
                        <div >
                            <div className={style.deg1}>
                                <p>2+</p>
                            </div>
                            <h3 className='my-2'>Compaines <br /><span className={style.ora}>Works</span></h3>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
