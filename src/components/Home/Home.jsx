import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles["home-section"]} id="home">
            <div className="wrapper">
                <div className={styles.home}>
                    <div className={styles.home__content}>
                        <div className={styles.home__title}>
                            <h2 className={styles['home__title-greeting']}>Hello, I'm</h2>
                            <h1 className={styles['home__title-name']}>Bogdan</h1>
                        </div>
                        <div className={styles['text-wrapper']}>
                            <p className={styles['home__paragraph-creative']}>
                                Creative <span className={styles.items}>Front-end Developer</span> Based In Gdańsk Poland.
                            </p>
                        </div>
                        <div className={styles.links}>
                            <div className={styles.link}>
                                <a className={styles['link-item']} href="#projects">View Projects</a>
                            </div>
                            <span className={styles.divider}>or</span>
                            <div className={styles.link}>
                                <a className={styles['link-item']} href="#about">Read About Me</a>
                            </div>
                        </div>
                        <div className={styles.scroll}>
                            <a href="#about">
                                <span className={styles.scroll__mouse}></span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.content}>
                            <img className={styles.circle__img} src="./images/profile.jpeg" alt="Bogdan Tsaruk" />
                            <h2 className={styles.circle__paragraph}>
                                Bogdan Tsaruk
                                <br /> <span /> Web Developer
                            </h2>
                            <a className={styles.circle__link} href="#contact">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home