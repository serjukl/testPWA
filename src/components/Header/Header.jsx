import React, {useEffect, useState} from 'react'
import styles from './Header.module.sass'

const Header = ({onClickInstall , isLoad, isLoadAnim, setLoadAnim}) => {
    let [button, setButtonS]= useState(false)
    let [valueMB, setValueMB]= useState('0.0')
    let startLoad = ()=>{
        const times = ['2.3', '4.7', '7.7', '10']
        let i = 0, howManyTimes = 4;

        const tmpFunc = () => {
            setValueMB(times[i])
            i++
            if (i < howManyTimes) {
                setTimeout(tmpFunc, 700);
            }
            if(i === 4){
                setLoadAnim(false)
                setButtonS(true)
            }
        }
        tmpFunc()
        console.log('alets')
    }

    useEffect(()=>{
        startLoad()

    },[isLoadAnim])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src="/images/header/logo.png" alt="app-logo" />
                </div>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.name}>Tesla X Invest</h1>
                    <div className={styles.companyNameContainer}>
                        <p className={styles.companyName}>Tesla, Inc.</p>
                        <p className={styles.typeOfApp}>Финансы</p>
                    </div>
                    <div className={styles.ageContainer}>
                        <p>18+</p>
                        <span>Без&nbsp;рекламы</span>
                    </div>
                    <div className={styles.canDownloadContainer}>
                        <p className={styles.support}>Поддерживаются покупки в приложении</p>
                        <div className={styles.canDownload}>
                            <img src="/images/can-download-icon.webp" alt="alert-icon" />
                            <p>Это приложение можно скачать на ваше устройство.</p>
                        </div>
                    </div>
                    <div className={styles.addToWishList}>
                        <img src="/images/wish-list-icon.webp" alt="" />
                        <p>
                            Добавить в список желаний
                        </p>
                    </div>
                </div>
                <div className={styles.downloadContainer}>
                    <div>
                        <div className={styles.apperStarsBlock}>
                            <img src={'images/header/sheald.png'}/>
                            <p>Выбор редакции</p>
                        </div>
                       <div className={styles.starsContainer}>
                           <div className={styles.stars}>
                               <img src={'images/header/star.png'}/>
                               <img src={'images/header/star.png'}/>
                               <img src={'images/header/star.png'}/>
                               <img src={'images/header/star.png'}/>
                               <img src={'images/header/star.png'}/>

                           </div>
                           <div className={styles.downloads}>
                               <p>658 704</p>
                               <img src="/images/downloads-icon.webp" alt="downloads-icon" />
                           </div>
                       </div>
                    </div>
                    {!isLoadAnim &&
                    <div className={styles.installBtnContainer}>
                        <button onClick={() => onClickInstall()}>{isLoad}</button>
                    </div>
                    }
                    {isLoadAnim &&
                    <div>
                        <p>{valueMB}/10MB</p>
                        <div className={styles.back_line}>
                            <div style={{width:`${valueMB * 10}%`}} className={styles.progresive_line}>

                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className={styles.iconsWrapper}>
                <div className={styles.blockIconAle}>
                    <div className={styles.wrapIcon}>
                        <p>4.9</p>
                        <img src={'images/header/star.png'}/>
                    </div>
                    <p className={styles.textUnder}>20&nbsp;тыс.</p>
                </div>
                <div className={styles.lineWrapper}>
                    <div className={styles.line}>

                    </div>
                </div>
                <div className={styles.blockIconAle}>
                    <div className={styles.wrapIconDownload}>
                        <img src={'images/donload_2.png'}/>
                    </div>
                    <p className={styles.textUnder}>10&nbsp;MB</p>
                </div>
                <div className={styles.lineWrapper}><div className={styles.line}></div></div>
                <div className={styles.blockIconAle}>
                    <div className={styles.wrapIconAge}>
                        <p>12+</p>
                    </div>
                    <p className={styles.textUnder}> 12&nbsp;+</p>
                </div>
                <div className={styles.lineWrapper}><div className={styles.line}></div></div>
                <div className={styles.blockIconAle}>
                    <div className={styles.wrapIcon}>
                        <p>100&nbsp;тыс.</p>
                    </div>
                    <p className={styles.textUnder}>Скачивания</p>
                </div>
            </div>
            {!isLoadAnim &&
            <div className={styles.mobile_button}>
                <button onClick={() => onClickInstall()}>{isLoad}</button>
            </div>
            }

            {isLoadAnim &&
            <div className={styles.mobile_position}>
                <p>{valueMB}/10MB</p>
                <div className={styles.back_line}>
                    <div style={{width:`${valueMB * 10}%`}} className={styles.progresive_line}>

                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Header
