import React, {useState} from 'react'
import styles from './Description.module.sass'

export  const Description = () => {
    let [isShow, setIsShow]= useState(false)
    return (
        <div className={styles.descWrapper}>
            <div className={isShow ? styles.descTextShow: styles.descText }>
                <p className={styles.txt}>
                    Если вы интересуетесь инвестициями валют - тогда Добро Пожаловать в приложение TESLA-X!<br/>
                    Вся актуальная информация в одном приложении!<br/>
                    Великолепное решение для вашего мобильного устройства!<br/>
                    Будь всегда в курсе инвестиций вместе с TESLA-X!<br/>
                    Наслаждайтесь удобным пользовательским интерфейсом!<br/>
                    Мы приглашаем всех желающих получить невероятное удовольствие от комфортного пользования приложением!
                </p>
                {!isShow && <div className={styles.hide_text}></div>}
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={()=>{setIsShow(!isShow)}}>{isShow ? 'Скрыть' : 'Подробне...'}</button>
            </div>
        </div>
    )
}


