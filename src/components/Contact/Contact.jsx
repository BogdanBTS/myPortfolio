import React from 'react';
import styles from './Contact.module.css';
import Reveal from '../Reveal/Reveal';
import { TbPhoneCheck } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <Reveal>
                <div className="wrapper">
                    <div className={styles.title}>
                        <h2>
                            Get In <span className={styles['title-span']}>Touch</span>
                        </h2>
                        <hr />
                    </div>
                    <div className={`${styles['contact-form']} grid`}>
                        <div className={styles.content}>
                            <h3 className={styles['content-heading']}>Let's Build Connections</h3>
                            <p className={styles['content-paragraph']}> Please, fill out the form, call or email me:</p>
                            <div className={styles['contact-wrapper']}>
                                <TbPhoneCheck size={50} />
                                <span className={styles['action-message']}>Call me</span>
                                <h3 className={styles['phone-number']}>+48886044919</h3>
                            </div>
                            <div className={styles['contact-wrapper']}>
                                <HiOutlineMail size={50} />
                                <span className={styles['action-message']}>Email</span>
                                <a className={styles['mail-link']} href="mailto:bt.devmastery@gmail.com">bt.devmastery@gmail.com</a>
                            </div>
                        </div>
                        <div className={styles.send}>
                            <h3 className={styles['send-heading']}>Send Me a Message</h3>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Contact