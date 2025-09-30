import React from 'react'
import styles from "./Styles/certificate.module.css"
import cert from "../assets/certificate1.jpg"
// import c1 from "../assets/cert/c221.png"
import c1 from "../assets/cert/oip.jpeg"
import c2 from "../assets/cert/c2.png"
import c3 from "../assets/cert/c3.png"
import c4 from "../assets/cert/c4.png"
export default function Certificate() {
    return (
        <div className={`${styles.certificate}`}>

            <div className={`${styles.certificateHeading} fontsize_6`}>
                Our Certifications
            </div>

            {/* <div className={`${styles. certificateImgBox} w-3/4 lg:w-1/2 `}>
                <img style={{width : "100%"}} src={cert} alt="" />

            </div> */}

            <div className = "mt-8  flex justify-center items-center gap-x-4 md:gap-x-12 lg:gap-x-20"  >
                <div className='w-36'>
                    <img style={{width :"100%"}} src={c1} alt="" />
                </div>

                <div className='w-36'>
                    <img style={{width :"100%"}} src={c2} alt="" />
                </div>

                <div className='w-80'>
                    <img style={{width :"100%"}} src={c3} alt="" />
                </div>

                <div className='w-28'>
                    <img style={{width :"100%"}} src={c4} alt="" />
                </div>

            </div>



        </div>
    )
}
