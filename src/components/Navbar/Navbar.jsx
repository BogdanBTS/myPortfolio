import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import NavbarLinks from './NavbarLinks'

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
];

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showLinks, setShowLinks] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [windowWidth]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4 //40%
        }

        const handleIntersect = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersect, options);

        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            observer.observe(section);

        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        }
    }, [])


    const handleSectionClick = (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            })
            setShowLinks(!showLinks);
        }
    }

    const toggleLinks = () => setShowLinks(!showLinks);

    return (
        <header className={styles.header}>
            <nav className={`${styles.header__navbar} ${isScrolled ? styles.scrolled : ''}`}>
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
                        <div className={`${styles["menu-links"]} ${showLinks ? styles.show : ''}`}>
                            <ul className={styles['menu-links__list']}>
                                {navLinks.map(link => (
                                    <NavbarLinks
                                        key={link.id}
                                        href={`#${link.id}`}
                                        label={link.label}
                                        onClick={handleSectionClick}
                                        active={activeSection === link.id}
                                    />
                                ))}
                            </ul>
                        </div>
                        {windowWidth <= 890 && (
                            <div className={`${styles['toggle-button']} ${showLinks ? styles.open : ''}`} onClick={toggleLinks}>
                                <span className={styles['toggle-button__line']}></span>
                                <span className={styles['toggle-button__line']}></span>
                                <span className={styles['toggle-button__line']}></span>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar