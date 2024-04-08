import React from 'react'
import styles from './Cards.module.css'
import { IoIosArrowDropright } from 'react-icons/io'


const Cards = ({ image, title, demoLink, gitHub, description }) => {
    return (

        <li>
            <div className={styles.card}>
                <img draggable="false" src={image} alt='Project' />
                <div className={styles['card-overlay']}>
                    <div className={styles['card-header']}>
                        <IoIosArrowDropright size={45} className={styles['card-icon']} />
                        <div className={styles['card-content']}>
                            <h3 className={styles['card-title']}>{title}</h3>
                            <a className={styles['demo-link']} href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                            <a className={styles['github-link']} href={gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                    <p className={styles['card-description']}>
                        {description} </p>
                </div>
            </div>
        </li>
    )
}

export default Cards