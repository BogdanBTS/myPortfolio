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
                    I'm <span className={styles['first-name']}>Bogdan</span> , a creative developer from Gdańsk, Poland (originally from Zhytomyr, Ukraine). I'm passionate about creating stunning websites that are both visually appealing and user-friendly. I have expertise in translating designs into fully functional and accessible websites, and I utilize my development skills to enhance and customize their features.
                </p>
                <p className={styles['about-content__paragraph']}>
                    After the start of the full-scale war in Ukraine, my wife, three minor children, and I were forced to leave our home in March 2022. Since that time, I have been learning and improving in software development field, and actively helping my family to adapt and build a better life in Poland.
                    In my leisure time, I enjoy reading self-development books and spending quality time with my beloved wife and three children.</p>
            </div>
        </section>
    )
}

export default About