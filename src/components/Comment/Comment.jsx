import React from 'react'
import styles from './Comment.module.sass'


export  const Comment = ({img, name, date, like, text}) => {
    return (
        <div>
            <div className={styles.commentWrapper}>
                <div className={styles.imgWrapper}>
                    <img src={img}/>
                </div>
                <div className={styles.commentDesc}>
                    <div className={styles.commentTitle}>
                        <div>
                            <p className={styles.commentName}>{name}</p>
                            <p className={styles.commentDate}>{date}</p>
                        </div>
                        <div className={styles.commentBlockLike}>
                            <img src="/images/comments/like.png"/>
                            <p>{like}</p>
                        </div>
                    </div>
                    <div className={styles.textComment}><p>{text}</p></div>
                </div>
            </div>
        </div>
    )
}


