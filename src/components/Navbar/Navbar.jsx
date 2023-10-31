import React from 'react'
import styles from "./Navbar.module.css"
import NavbarLinks from './NavbarLinks'

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
];

function navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__navbar}>
                <div className="wrapper">
                    <div className={styles['header__navbar-wrapper']}>
                        <div className={styles.header__logo}>
                            <a href='index.html' className={styles['header__logo-link']}>
                                <img className={styles['header__logo-img']} src="./images/logo.png" alt="Bogdan Tsaruk" />
                                <div className={styles['header__logo-inner']} >
                                    <span className={styles['header__top-text']}>Bogdan Tsaruk</span>
                                    <br />
                                    <span className={styles['header__bottom-text']}>Web Developer</span>
                                </div>
                                <span className="visually-hidden">(to home page)</span>
                            </a>
                        </div>
                        <div className={styles["navbar-links"]}>
                            <ul className={styles['navbar-links__list']}>
                                {navLinks.map(link => (
                                    <NavbarLinks
                                        key={link.id}
                                        href={`#${link.id}`}
                                        label={link.label}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className={styles['toggle-button']}>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default navbar