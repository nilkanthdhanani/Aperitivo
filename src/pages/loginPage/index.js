"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './login.module.scss';

import loginBg from '../../assets/images/webp/loginBg.jpg';
import SignIn from '@/components/login/signIn';
import SignUp from '@/components/login/signUp';
import Link from 'next/link';
import GoogleIco from '@/assets/images/svg/googleIco';

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
                        <div className={styles.siginDiv}>
                            <SignIn />
                            <div className={styles.navigationDiv}>
                                <p>Not a member? <Link href={"/"}>Register now</Link></p>
                            </div>
                        </div>
                        {/* <div className={styles.sigupDiv}>
                            <SignUp />
                            <div className={styles.navigationDiv}>
                                <p>Already have an account? <Link href={"/"}>Sign in</Link></p>
                            </div>
                            <div className={styles.orLine}>
                                <span>or</span>
                            </div>
                            <div className={styles.googleSignup}>
                                <button type="button"><GoogleIco />Sign up with Google</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
