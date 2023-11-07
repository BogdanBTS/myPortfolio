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
                            Every day is a new challenge, and I gain more knowledge and experience. Learning new technologies has always been interesting to me, and I strive to stay up-to-date as technology constantly evolves.
                        </p>
                    </div>
                    <div className={styles['skills-sings']}>

                    </div>
                </div>
            </div>
            <div className={styles['bottom']}>
                <div className={`${styles.flex} wrapper`}>
                    <div className="">
                        <h3>I'm open for work</h3>
                    </div>
                    <div className="">
                        <a href=""> </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills