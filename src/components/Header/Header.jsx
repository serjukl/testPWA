import React from 'react'
import styles from './Header.module.sass'

const Header = ({onClickInstall}) => {
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
                    <div className={styles.installBtnContainer}>
                        <button onClick={() => onClickInstall()}>Установить</button>
                    </div>
                </div>
            </div>
            <div className={styles.installBtnContainerPhone}>
                <button onClick={() => onClickInstall()}>Установить</button>
            </div>
        </>
    )
}

export default Header
