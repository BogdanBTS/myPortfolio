import React from 'react'
import styles from './Cards.module.css'
import { IoIosArrowDropright} from 'react-icons/io'


const Cards = ({ image, title, demoLink, gitHub }) => {
    return (

        <li>
            <div className={styles.card}>
                <img src={image} alt='Project' />
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
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</p>
                </div>
            </div>
        </li>
    )
}

export default Cards