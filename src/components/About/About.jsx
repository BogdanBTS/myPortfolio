import React from 'react';
import styles from './About.module.css'
import Reveal from '../Reveal/Reveal';

function About() {
    return (
        <section className={styles.about} id="about">
            <Reveal>
                <div className="wrapper">
                    <div className={styles.title}>
                        <h2 className={styles['title-heading']}>
                            About <span className={styles['title-span']}>Me</span>
                        </h2>
                        <hr />
                    </div>
                    <div className="grid">
                        <div className={styles['about-img']}>
                            <img className={styles["about-img__picture"]} src="./images/profile.jpeg" alt="Bogdan Tsaruk" />
                        </div>
                        <div className={styles['about-content']}>
                            <h3 className={styles.border}>Hi there!</h3>
                            <p className={styles['about-content__paragraph']}>
                                I'm <span className={styles['first-name']}>Bogdan</span>, a creative developer from Gdańsk, Poland (originally from Zhytomyr, Ukraine). I'm passionate about creating stunning websites that are both visually appealing and user-friendly. I have expertise in translating designs into fully functional and accessible websites, and utilize my development skills to enhance and customize their features.
                            </p>
                            <p className={styles['about-content__paragraph']}>
                                After the start of the full-scale war in Ukraine, my wife, three minor children, and I were forced to leave our home in March 2022. Since that time, I have been learning and improving in software development field, and actively helping my family to adapt and build a better life in Poland.
                                In my leisure time, I enjoy spending quality time with my beloved wife and three children, traveling, reading self-development books, and delving into philosophical works.</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default About