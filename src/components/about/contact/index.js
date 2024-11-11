'use client';

import { useState } from 'react';
import InputErrorIco from '@/assets/images/svg/inputErrorIco';
import styles from './contact.module.scss';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Enter a first name.';
        if (!formData.lastName) newErrors.lastName = 'Enter a last name.';
        if (!formData.email) {
            newErrors.email = 'Enter an email address';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address like example@mysite.com..';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <section className={styles.contact}>
            <div className={styles.contactDiv1}>
                <h2>Custom Services</h2>
                <p>Tailor your cocktail experience with our custom services, designed to meet your unique taste and event preferences.</p>
            </div>
            <div className={styles.contactDiv2}>
                <div className={styles.contactForm}>
                    <h3>Contact Us for Tailored Experience</h3>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={styles.contactInputGrid}>
                            <div className={styles.contactInput}>
                                <label htmlFor='firstName'>First name *</label>
                                <input
                                    type='text'
                                    name='firstName'
                                    id='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <span><InputErrorIco /> {errors.firstName}</span>}
                            </div>
                            <div className={styles.contactInput}>
                                <label htmlFor='lastName'>Last name *</label>
                                <input
                                    type='text'
                                    name='lastName'
                                    id='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <span><InputErrorIco /> {errors.lastName}</span>}
                            </div>
                            <div className={styles.contactInput}>
                                <label htmlFor='email'>Email *</label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span><InputErrorIco /> {errors.email}</span>}
                            </div>
                            <div className={styles.contactInput}>
                                <label htmlFor='subject'>Subject</label>
                                <input
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.contactInput}>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                name='message'
                                id='message'
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
