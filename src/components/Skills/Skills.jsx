import React from 'react'
import styles from './Skills.module.css'

function Skills() {
    return (
        <section className={styles.skills} id='skills'>
            <div className="wrapper">
                <div className={styles.title}>
                    <h2 className={styles['title-heading']}>
                        <span className={styles['title-span']}>My</span> Skills
                    </h2>
                    <hr />
                </div>
                <div className={`grid ${styles['skills-grid']}`}>
                    <div className={styles['skills-content']}>
                        <h1>
                            In <span className={styles['skills-heaning']}>Developing</span>
                        </h1>
                        <p className={styles['skills-content__paragraph']}>
                            Each day presents a fresh opportunity to expand my knowledge and refine my problem-solving skills. The continuous evolution of technology fuels my passion for learning and drives me to stay abreast of the latest advancements.
                        </p>
                    </div>
                    <div className={styles['skills-sings']}>

                    </div>
                </div>
            </div>
            <div className={styles['bottom']}>
                <div className={`${styles.flex} wrapper`}>
                    <div className="">
                        <h3>I'm open to work</h3>
                    </div>
                    <div className="">
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills