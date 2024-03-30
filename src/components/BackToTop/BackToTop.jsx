import React, { useEffect } from 'react';
import styles from './BackToTop.module.css'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { useState } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    return (
        <button aria-label="Scroll to the top" className={`${styles.button} ${showButton ? styles.show : ''}`} onClick={scrollToTop}>
            <HiArrowNarrowUp size={20} className={styles.icon} />
        </button>
    )
}

export default BackToTop