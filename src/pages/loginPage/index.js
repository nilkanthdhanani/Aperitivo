"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './login.module.scss';

import loginBg from '../../assets/images/webp/loginBg.webp';
import LoginMain from '@/components/login';

export default function LoginPage() {
    const [isLoginActive, setIsLoginActive] = useState(false);

    const handleLoginClick = () => {
        setIsLoginActive(true);
    };

    return (
        <main className={`${styles.login} ${isLoginActive ? styles.active : ''}`}>
            <div className={styles.loginBanner}>
                <Image src={loginBg} alt="loginBg" />
                <div className={styles.loginBannerUpper}>
                    <h2>Hello Again!</h2>
                    <p>Welcome back you have been missed!</p>
                    <button onClick={handleLoginClick}>Sign in</button>
                </div>
            </div>
            <div className={styles.loginDiv}>
                <div className={styles.loginDivImage}>
                </div>
                <div className={styles.loginDivContent}>
                    <LoginMain />
                </div>
            </div>
        </main>
    );
}
