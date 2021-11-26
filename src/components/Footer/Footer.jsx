import React from 'react'
import styles from './Foter.module.sass'


export  const Footer = () => {
    return (
        <div className={styles.wrapperFooter}>
            <div className={styles.Footer_title}><p>Дополнительная информация</p></div>
            <div className={styles.footerWrapper}>
                <div>
                    <div className={styles.blockMenu}><b>Обновлено</b><p>3 сентяря 2021</p></div>
                    <div className={styles.blockMenu}><b>Текущая версия</b><p>2.0</p></div>
                </div>
                <div>
                    <div className={styles.blockMenu}><b>Размер</b><p>4.8 MB</p></div>
                    <div className={styles.blockMenu}><b>Возраст</b><p>18+</p></div>
                </div>
                <div>
                    <div className={styles.blockMenu}><b>Установок</b><p>50+ тыс.</p></div>
                    <div className={styles.blockMenu}><b>Разработчик</b><p>Tesla, Inc.</p></div>
                </div>
            </div>
        </div>
    )
}


