import React from 'react'
import styles from './GoalsCard.module.css';
const GoalsCard =({ title, description, category ,icon}) => {
    return (
        <div className={styles.cardSection}>
            <div className={styles.card}>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardContainer}>
                        <div className={styles.cardFront}>
                            <div className={`${styles.cardFrontTp} ${styles[`cardFrontTp--${category}`]}`}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox={title == "Core Values" ? "0 0 512 512" : title == "Our Mission" ? "0 0 24 24":"0 0 20 20"} height="3.25rem" width="3.25rem" xmlns="http://www.w3.org/2000/svg" className={styles.card_front__icon}>{icon} </svg>
                                <h2 className={styles.cardFrontHeading}>{title}</h2>
                            </div>
                            <div className={styles.cardFrontBt}>
                                <p className={`${styles.cardFrontTextView} ${styles[`cardFrontTextView--${category}`]}`}>
                                    View me
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardBack}>
                            <div className={styles.insidePageContainerTitle}>
                                <h3 className={`${styles.insidePageHeading} ${styles[`insidePageHeading--${category}`]}`}>
                                    {description.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.insidePage}>
                    <div className={styles.insidePageContainer}>
                        <p className={styles.insidePageText}>{description.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoalsCard
