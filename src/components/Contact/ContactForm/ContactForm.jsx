import React, { useState } from 'react';
import styles from './ContactForm.module.css'

const ContactForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [touchedFields, setTouchedFields] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setEnteredName(value);
        } else if (name === 'email') {
            setEnteredEmail(value);
        } else if (name === 'message') {
            setEnteredMessage(value)
        }
    }

    const handleInputBlur = (event) => {
        const { name } = event.target;
        if (!touchedFields.includes(name)) {
            setTouchedFields((prevFieldsState) => [...prevFieldsState, name]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setTouchedFields(['name', 'email', 'message']);

        if (enteredName.trim() === '' || enteredEmail.trim() === '' || enteredMessage.trim() === '') {
            console.log('Empty field in SEND ME A MESSAGE form!');
            return;
        }

        const formData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
        }

        fetch('https://formsubmit.co/ajax/bt.devmastery@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
        })

        console.log(formData);

        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
        setTouchedFields([]);
    }

    const isFieldInvalid = (fieldName) => {
        if (fieldName === 'name') {
            return enteredName.trim() === '' && touchedFields.includes(fieldName);
        }

        if (fieldName === 'email') {
            return (!enteredEmail.trim() || !enteredEmail.includes('@')) && touchedFields.includes(fieldName);
        }
        if (fieldName === 'message') {
            return enteredMessage.trim() === '' && touchedFields.includes(fieldName);
        }
        return false;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`${styles['form-control']} ${isFieldInvalid('name') && styles.invalid}`}>
                <input type="text" name='name' placeholder='Name' value={enteredName} onChange={handleInputChange} onBlur={handleInputBlur} autoComplete='off' />
                {isFieldInvalid('name') && (
                    <p className={styles.error}>Please enter your name.</p>
                )}
            </div>
            <div className={`${styles['form-control']} ${isFieldInvalid('email') && styles.invalid}`}>
                <input type="email" name='email' placeholder='Email' value={enteredEmail} onChange={handleInputChange} onBlur={handleInputBlur} autoComplete='off' />
                {isFieldInvalid('email') && (
                    <p className={styles.error}>Please enter a valid email address.</p>
                )}
            </div>
            <div className={`${styles['form-control']} ${isFieldInvalid('message') && styles.invalid}`}>
                <textarea
                    className={styles.textarea} name='message' placeholder='Message' value={enteredMessage} onChange={handleInputChange} onBlur={handleInputBlur}
                >
                </textarea>
                {isFieldInvalid('message') && (
                    <p className={styles.error}>Please enter your message.</p>
                )}
            </div>
            <input name="_formsubmit_id" type="text" style={{ display: 'none' }}></input>
            <button className={styles.button}>Send Message</button>
        </form>
    )
}

export default ContactForm