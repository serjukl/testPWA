import React from 'react'
import styles from './Reviews.module.sass'
import {Comment} from "../Comment/Comment";


export  const Reviews = () => {
    let arrCommnets = [
        {img: '/images/comments/com_1.png', data: '01.11.21',like:'15', name:'Алексей Миннеханов', text: 'Классное приложение, доступно много аналитики. Поддержка работает хорошо, понятно и вежливо отвечают. Удобно инвесировать.'},
        {img: '/images/comments/com_2.png', data: '28.10.21',like:'11', name:'Alexander Soloveov', text: 'Приложение хорошее. Инвестирую только через это приложение'},
        {img: '/images/comments/com_3.png', data: '24.11.21',like:'9', name:'Alex Alex', text: 'Очень хорошее приложение. В инвестициях я новичок, а тут все ясно и понятно'},
        {img: '/images/comments/com_4.png', data: '12.10.21',like:'12', name:'Николай Хромченков', text: 'Теперь только я решаю сколько мне зарабатывать и мой заработок под моим контролем'},
        {img: '/images/comments/com_5.png', data: '28.09.21',like:'19', name:'Максим Бирюков', text: 'Увеличил свой доход в короткие сроки,быстро вывел заработанные деньги'},
        {img: '/images/comments/com_6.png', data: '01.10.21',like:'15', name:'Дмитрий Костенко', text: 'Персональные консультации от эксперта очень помогли мне'},
        {img: '/images/comments/com_7.png', data: '20.09.21',like:'21', name:'Андрей Андреевич', text: 'За месяц начал неплохо зарабатывать,спасибо приложению,что предоставило такую возможность'},
        {img: '/images/comments/com_8.png', data: '02.09.21',like:'11', name:'Юрий Николаевич', text: 'Раньше думал инвестиции это не мое, но всё-таки решил рискнуть, и не прогадал, жаль что это приложение не попалось раньше.'},
        {img: '/images/comments/com_9.png', data: '30.08.21',like:'14', name:'Наталья Васильева', text: 'Приложение помогло добиться стабильного большого дохода'},
        {img: '/images/comments/com_10.png', data: '11.08.21',like:'14', name:'Denchik Denchikov', text: 'Я новичок в инвестициях, долго боялась в укладывать деньги, но тут все просто и понятно. РекомендуюЯ новичок в инвестициях, долго боялась в укладывать деньги, но тут все просто и понятно. Рекоменду'},
    ]
    return (
        <div>
            <div>
                <div className={styles.titleRev}><h3>Оценки и отзывы</h3></div>
                <div className={styles.blockRew}>
                    <div className={styles.rewScope}>
                        <div className={styles.scopeNumber}>4.9</div>
                        <div className={styles.scopeStars}>
                            <div className={styles.imgWrapper}><img src="images/fullStar.png"/></div>
                            <div className={styles.imgWrapper}><img src="images/fullStar.png"/></div>
                            <div className={styles.imgWrapper}><img src="images/fullStar.png"/></div>
                            <div className={styles.imgWrapper}><img src="images/fullStar.png"/></div>
                            <div className={styles.imgWrapper}><img src="images/fullStar.png"/></div>
                        </div>
                        <div className={styles.scopePeople}>
                            <div className={styles.wrapperTxt}><p>Всего</p><img src="images/person.png"/></div>
                            <p>178</p>
                        </div>
                    </div>
                    <div className={styles.rewGraph}>
                        <div className={styles.rewGraphElem}><span>5</span>
                            <div className={styles.line_1}></div>
                        </div>
                        <div className={styles.rewGraphElem}><span>4</span>
                            <div className={styles.line_2}></div>
                        </div>
                        <div className={styles.rewGraphElem}><span>3</span>
                            <div className={styles.line_3}></div>
                        </div>
                        <div className={styles.rewGraphElem}><span>2</span>
                            <div className={styles.line_4}></div>
                        </div>
                        <div className={styles.rewGraphElem}><span>1</span>
                            <div className={styles.line_5}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '20px'}}>
                {arrCommnets.map((com)=><Comment text={com.text} name={com.name} like={com.like} img={com.img} date={com.data}/>)}
            </div>
        </div>
    )
}


