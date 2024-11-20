"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './login.module.scss';

import loginBg from '../../assets/images/webp/loginBg.jpg';
import Link from 'next/link';
import EyeIco from '@/assets/images/svg/eyeIco';

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
                <div className={styles.loginDivContent}>
                    <div className={styles.loginDivMain}>
                        <div className={styles.logo}>
                            <Link href={"/"}>Apéritivo</Link>
                        </div>
                        <form>
                            <div className={styles.formInput}>
                                <input type="text" placeholder="Enter username" required></input>
                            </div>
                            <div className={styles.formInput2}>
                                <div className={styles.inputRlMain}>
                                    <input type="password" placeholder="Password" required></input>
                                    <div className={styles.eyeicon}>
                                        <EyeIco />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fogotPasswordLink}>
                                <Link href={"/Resetpassword"}>Forgot password?</Link>
                            </div>
                            <div className={styles.signInButton}>
                                <button>Sign in</button>
                                <p>Don’t have an account? <Link href={"/signup"}>Sign up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
