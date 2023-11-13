import React from 'react';
import styles from './Footer.module.css'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.flex}>
                    <p className={styles['copyrights-paragraph']}>
                        &copy; 2023 by Bogdan Tsaruk. All rights reserved.
                    </p>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
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