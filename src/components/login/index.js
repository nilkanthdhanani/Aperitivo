import { useState } from 'react';
import styles from './loginMain.module.scss';

import SignIn from '@/components/login/signIn';
import SignUp from '@/components/login/signUp';
import Link from 'next/link';
import GoogleIco from '@/assets/images/svg/googleIco';

export default function LoginMain() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(false);

    const handleRegisterClick = () => {
        setIsSignUpVisible(true);
    };

    const handleSignInClick = () => {
        setIsSignUpVisible(false);
    };

    return (
        <div className={styles.loginDivMain}>
            <div className={styles.logo}>
                <Link href={"/"}>Apéritivo</Link>
            </div>
            {!isSignUpVisible && (
                <div className={styles.siginDiv}>
                    <SignIn />
                    <div className={styles.navigationDiv}>
                        <p>
                            Not a member?{' '}
                            <button type='button' onClick={handleRegisterClick}>
                                Register now
                            </button>
                        </p>
                    </div>
                </div>
            )}
            {isSignUpVisible && (
                <div className={styles.sigupDiv}>
                    <SignUp />
                    <div className={styles.navigationDiv}>
                        <p>
                            Already have an account?{' '}
                            <button type='button' onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </p>
                    </div>
                    <div className={styles.orLine}>
                        <span>or</span>
                    </div>
                    <div className={styles.googleSignup}>
                        <button type="button">
                            <GoogleIco />
                            Sign up with Google
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
