import React from 'react';
import styles from './Footer.module.css'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
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
        }
    }

    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.flex}>
                    <p className={styles['copyrights-paragraph']}>
                        &copy; 2024 by Bogdan Tsaruk. All rights reserved.
                    </p>
                    <ul>
                        <li>
                            <a onClick={handleSectionClick}
                                href="#home">Home</a>
                        </li>
                        <li>
                            <a onClick={handleSectionClick}
                                href="#about">About</a>
                        </li>
                        <li>
                            <a onClick={handleSectionClick} href="#skills">Skills</a>
                        </li>
                        <li>
                            <a onClick={handleSectionClick} href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a onClick={handleSectionClick} href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className={styles.icons}>
                        <a href="https://github.com/BogdanBTS" target="_blank" rel="noopener noreferrer">
                            <BsGithub size={30} />
                        </a>
                        <a href="https://linkedin.com/in/bogdan-tsaruk-187bb2227" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={30} />
                        </a>
                        <a href="https://instagram.com/bogdan.tsaruk_dev?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <BsInstagram size={30} />
                        </a>
                        <a href="https://x.com/btsaruk?s=21&t=xrt3y_yVKzLjiubPnFtKPw" target="_blank" rel="noopener noreferrer">
                            <RiTwitterXLine size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer