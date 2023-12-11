import React, { useState } from 'react';
import styles from './Accordion.module.css'


const Accordion = ({ accordionList }) => {
    const [openId, setOpenId] = useState(0);

    const handleClick = (id) => {
        if (id === openId) setOpenId(0)
        else setOpenId(id)
    }

    return (
        <ul className={styles['about-accordion']}>
            {accordionList.map((listItem, id) => (
                <li key={listItem.id} onClick={() => handleClick(id)} className={`${styles['accordion-panel']} ${id === openId ? `${styles.open}` : ''}`}>
                    <h3 id={listItem.panelHeadingId}>
                        <button
                            className={styles['accordion-trigger']}
                            aria-controls={listItem.ariaControls}
                            aria-expanded={id === openId ? `true` : 'false'}
                        >
                            <span className={styles['accordion-title-span']} id={listItem.panelTitleId}>{listItem.panelTitle}</span>
                            <img aria-hidden='true' className={styles['accordion-icon']} src={listItem.iconSrc} alt={listItem.iconAlt} />
                        </button>

                    </h3>
                    <div
                        className={styles['accordion-content']}
                        id={listItem.panelContentId}
                        aria-labelledby={listItem.ariaLabelledby}
                        aria-hidden={id === openId ? `false` : 'true'}
                        role='region'>
                        <p>{listItem.contentParagraph1}</p>
                        <p>{listItem.contentParagraph2}</p>
                        <img className={styles['accordion-image']} draggable="false" src={listItem.imgSrc} alt={listItem.imgAlt} />
                    </div>

                </li>
            ))}
        </ul>
    )
}


export default Accordion;