import React from 'react'
import styles from './Slider.module.sass'
import Slider from "react-slick"

export  const SliderComp = () => {
    let settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <div className={styles.sliderWrapper}>
            <Slider {...settings}>
                <div className={styles.imgWrapper}>
                    <img src={'images/slider/slide_1.png'}/>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={'images/slider/slide_2.png'}/>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={'images/slider/slide_3.png'}/>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={'images/slider/slide_3.png'}/>
                </div>
            </Slider>
        </div>
    )
}


