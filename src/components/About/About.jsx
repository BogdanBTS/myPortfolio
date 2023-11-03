import React from 'react';
import styles from './About.module.css'

function About() {
    return (
        <section className={styles.about}>
            <div className="wrapper">
                <h2>
                    About <span>Me</span>
                </h2>
                <hr />
            </div>
            <div className={styles['about-img']}>
                <img className={styles["about-img__picture"]} src="./images/profile.jpeg" alt="Bogdan Tsaruk" />
            </div>
            <div className={styles['about-content']}>
                <h3 className={styles.border}>Hi there!</h3>
                <p className={styles['about-content__paragraph']}>
                    Some text I'm <span className={styles['first-name']}>Bogdan</span>
                </p>
            </div>
        </section>
    )
}

export default About