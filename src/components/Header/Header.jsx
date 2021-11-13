import React from 'react'
import styles from './Header.module.sass'

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src="/images/app-logo.webp" alt="app-logo" />
                </div>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.name}>NAME APPLICATION</h1>
                    <div className={styles.companyNameContainer}>
                        <p className={styles.companyName}>KRAFTON, Inc.</p>
                        <p className={styles.typeOfApp}>Экшен</p>
                    </div>
                    <div className={styles.ageContainer}>
                        <p>18+</p>
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
                    <div className={styles.starsContainer}>
                        <div className={styles.stars}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86844 3.44825L6.38895 3.08789L5.28055 0.840824C5.25028 0.7793 5.20047 0.729496 5.13895 0.699222C4.98465 0.62305 4.79715 0.686527 4.72 0.840824L3.61161 3.08789L1.13211 3.44825C1.06375 3.45801 1.00125 3.49024 0.953403 3.53907C0.895553 3.59853 0.863675 3.67852 0.864774 3.76147C0.865872 3.84442 0.899858 3.92354 0.959262 3.98145L2.75321 5.73047L2.32938 8.2002C2.31944 8.25765 2.3258 8.31674 2.34773 8.37076C2.36966 8.42478 2.40629 8.47158 2.45347 8.50584C2.50064 8.5401 2.55648 8.56046 2.61463 8.56461C2.67279 8.56876 2.73095 8.55652 2.7825 8.5293L5.00028 7.36328L7.21805 8.5293C7.2786 8.56153 7.34891 8.57227 7.41629 8.56055C7.58622 8.53125 7.70047 8.37012 7.67118 8.2002L7.24735 5.73047L9.04129 3.98145C9.09012 3.9336 9.12235 3.8711 9.13211 3.80274C9.15848 3.63184 9.03934 3.47364 8.86844 3.44825V3.44825Z" fill="black"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86844 3.44825L6.38895 3.08789L5.28055 0.840824C5.25028 0.7793 5.20047 0.729496 5.13895 0.699222C4.98465 0.62305 4.79715 0.686527 4.72 0.840824L3.61161 3.08789L1.13211 3.44825C1.06375 3.45801 1.00125 3.49024 0.953403 3.53907C0.895553 3.59853 0.863675 3.67852 0.864774 3.76147C0.865872 3.84442 0.899858 3.92354 0.959262 3.98145L2.75321 5.73047L2.32938 8.2002C2.31944 8.25765 2.3258 8.31674 2.34773 8.37076C2.36966 8.42478 2.40629 8.47158 2.45347 8.50584C2.50064 8.5401 2.55648 8.56046 2.61463 8.56461C2.67279 8.56876 2.73095 8.55652 2.7825 8.5293L5.00028 7.36328L7.21805 8.5293C7.2786 8.56153 7.34891 8.57227 7.41629 8.56055C7.58622 8.53125 7.70047 8.37012 7.67118 8.2002L7.24735 5.73047L9.04129 3.98145C9.09012 3.9336 9.12235 3.8711 9.13211 3.80274C9.15848 3.63184 9.03934 3.47364 8.86844 3.44825V3.44825Z" fill="black"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86844 3.44825L6.38895 3.08789L5.28055 0.840824C5.25028 0.7793 5.20047 0.729496 5.13895 0.699222C4.98465 0.62305 4.79715 0.686527 4.72 0.840824L3.61161 3.08789L1.13211 3.44825C1.06375 3.45801 1.00125 3.49024 0.953403 3.53907C0.895553 3.59853 0.863675 3.67852 0.864774 3.76147C0.865872 3.84442 0.899858 3.92354 0.959262 3.98145L2.75321 5.73047L2.32938 8.2002C2.31944 8.25765 2.3258 8.31674 2.34773 8.37076C2.36966 8.42478 2.40629 8.47158 2.45347 8.50584C2.50064 8.5401 2.55648 8.56046 2.61463 8.56461C2.67279 8.56876 2.73095 8.55652 2.7825 8.5293L5.00028 7.36328L7.21805 8.5293C7.2786 8.56153 7.34891 8.57227 7.41629 8.56055C7.58622 8.53125 7.70047 8.37012 7.67118 8.2002L7.24735 5.73047L9.04129 3.98145C9.09012 3.9336 9.12235 3.8711 9.13211 3.80274C9.15848 3.63184 9.03934 3.47364 8.86844 3.44825V3.44825Z" fill="black"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86844 3.44825L6.38895 3.08789L5.28055 0.840824C5.25028 0.7793 5.20047 0.729496 5.13895 0.699222C4.98465 0.62305 4.79715 0.686527 4.72 0.840824L3.61161 3.08789L1.13211 3.44825C1.06375 3.45801 1.00125 3.49024 0.953403 3.53907C0.895553 3.59853 0.863675 3.67852 0.864774 3.76147C0.865872 3.84442 0.899858 3.92354 0.959262 3.98145L2.75321 5.73047L2.32938 8.2002C2.31944 8.25765 2.3258 8.31674 2.34773 8.37076C2.36966 8.42478 2.40629 8.47158 2.45347 8.50584C2.50064 8.5401 2.55648 8.56046 2.61463 8.56461C2.67279 8.56876 2.73095 8.55652 2.7825 8.5293L5.00028 7.36328L7.21805 8.5293C7.2786 8.56153 7.34891 8.57227 7.41629 8.56055C7.58622 8.53125 7.70047 8.37012 7.67118 8.2002L7.24735 5.73047L9.04129 3.98145C9.09012 3.9336 9.12235 3.8711 9.13211 3.80274C9.15848 3.63184 9.03934 3.47364 8.86844 3.44825V3.44825Z" fill="black"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86844 3.44825L6.38895 3.08789L5.28055 0.840824C5.25028 0.7793 5.20047 0.729496 5.13895 0.699222C4.98465 0.62305 4.79715 0.686527 4.72 0.840824L3.61161 3.08789L1.13211 3.44825C1.06375 3.45801 1.00125 3.49024 0.953403 3.53907C0.895553 3.59853 0.863675 3.67852 0.864774 3.76147C0.865872 3.84442 0.899858 3.92354 0.959262 3.98145L2.75321 5.73047L2.32938 8.2002C2.31944 8.25765 2.3258 8.31674 2.34773 8.37076C2.36966 8.42478 2.40629 8.47158 2.45347 8.50584C2.50064 8.5401 2.55648 8.56046 2.61463 8.56461C2.67279 8.56876 2.73095 8.55652 2.7825 8.5293L5.00028 7.36328L7.21805 8.5293C7.2786 8.56153 7.34891 8.57227 7.41629 8.56055C7.58622 8.53125 7.70047 8.37012 7.67118 8.2002L7.24735 5.73047L9.04129 3.98145C9.09012 3.9336 9.12235 3.8711 9.13211 3.80274C9.15848 3.63184 9.03934 3.47364 8.86844 3.44825V3.44825Z" fill="black"/>
                            </svg>
                        </div>
                        <div className={styles.downloads}>
                            <p>658 704</p>
                            <img src="/images/downloads-icon.webp" alt="downloads-icon" />
                        </div>
                    </div>
                    <div className={styles.installBtnContainer}>
                        <button>Установить</button>
                    </div>
                </div>
            </div>
            <div className={styles.mobileStatsContainer}>
                <div className="element">
                    <div className="elemntUp">
                        <span>4.7</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.86844 3.44825L6.38895 3.08789L5.28055 0.840824C5.25028 0.7793 5.20047 0.729496 5.13895 0.699222C4.98465 0.62305 4.79715 0.686527 4.72 0.840824L3.61161 3.08789L1.13211 3.44825C1.06375 3.45801 1.00125 3.49024 0.953403 3.53907C0.895553 3.59853 0.863675 3.67852 0.864774 3.76147C0.865872 3.84442 0.899858 3.92354 0.959262 3.98145L2.75321 5.73047L2.32938 8.2002C2.31944 8.25765 2.3258 8.31674 2.34773 8.37076C2.36966 8.42478 2.40629 8.47158 2.45347 8.50584C2.50064 8.5401 2.55648 8.56046 2.61463 8.56461C2.67279 8.56876 2.73095 8.55652 2.7825 8.5293L5.00028 7.36328L7.21805 8.5293C7.2786 8.56153 7.34891 8.57227 7.41629 8.56055C7.58622 8.53125 7.70047 8.37012 7.67118 8.2002L7.24735 5.73047L9.04129 3.98145C9.09012 3.9336 9.12235 3.8711 9.13211 3.80274C9.15848 3.63184 9.03934 3.47364 8.86844 3.44825V3.44825Z" fill="black"/>
                        </svg>
                    </div>
                    <span className="additionalText">
                        Mark
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header
