import React from 'react'
import styles from './Portfolio.module.css'
import cardData from '../../cardData'
import Cards from './Cards/Cards'
import Reveal from '../Reveal/Reveal'

function Portfolio() {
    return (
        <section className={styles.portfolio} id='portfolio'>
            <Reveal>
            <div className="wrapper">
            <div className={styles.title}>
            <h2 className={styles['title-heading']}>
                Selected <span className={styles['title-span']}>Works</span>
                </h2> 
                <hr />       
        </div>
        <ul className={styles.cards}>
        {cardData.map(cardItem => (
            <Cards key={cardItem.id} image={cardItem.img} title={cardItem.title} demoLink={cardItem.demo} gitHub={cardItem.github} description={cardItem.description} />
        ))}
        </ul>
            </div>
            </Reveal>
        </section>
    )
}

export default Portfolio