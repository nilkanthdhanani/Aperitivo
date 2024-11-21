import { useState, useEffect } from 'react';
import styles from './loginMain.module.scss';

import Link from 'next/link';
import EyeIco from '@/assets/images/svg/eyeIco';
import ForgotPass from './forgotPass';

export default function SignIn() {
    const [showForgotPass, setShowForgotPass] = useState(false);

    const openForgotPass = () => setShowForgotPass(true);
    const closeForgotPass = () => setShowForgotPass(false);

    useEffect(() => {
        if (showForgotPass) {
            document.body.classList.add('scroll-of');
        } else {
            document.body.classList.remove('scroll-of');
        }

        return () => document.body.classList.remove('scroll-of');
    }, [showForgotPass]);

    return (
        <>
            <form>
                <div className={styles.formInput}>
                    <input type="text" id="username" placeholder=" " required />
                    <label htmlFor="username">Username</label>
                </div>
                <div className={styles.formInput2}>
                    <input type="password" id="password" placeholder=" " required />
                    <label htmlFor="password">Password</label>
                    <div className={styles.eyeicon}>
                        <EyeIco />
                    </div>
                </div>
                <div className={styles.fogotPasswordLink}>
                    <button type="button" onClick={openForgotPass}>Forgot password?</button>
                </div>
                <div className={styles.signInButton}>
                    <button>Sign in</button>
                </div>
            </form>
            {showForgotPass && <ForgotPass onClose={closeForgotPass} />}
        </>
    );
}
