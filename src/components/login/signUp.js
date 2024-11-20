import styles from './signIn.module.scss'

import Link from 'next/link';
import EyeIco from '@/assets/images/svg/eyeIco';
import GoogleIco from '@/assets/images/svg/googleIco';

export default function SignUp() {
    return (
        <div className={styles.signinDivMain}>
            <div className={styles.logo}>
                <Link href={"/"}>Apéritivo</Link>
            </div>
            <form>
                <div className={styles.formInput}>
                    <input type="text" placeholder="Name" required></input>
                </div>
                <div className={styles.formInput}>
                    <input type="email" placeholder="Email" required></input>
                </div>
                <div className={styles.formInput2}>
                    <div className={styles.inputRlMain}>
                        <input type="password" placeholder="Password" required></input>
                        <div className={styles.eyeicon}>
                            <EyeIco />
                        </div>
                    </div>
                </div>
                <div className={styles.signInButton}>
                    <button>Sign up</button>
                    <p>Already have an account? <Link href={"/"}>Sign in</Link></p>
                </div>
            </form>
            <div className={styles.orLine}>
                <span>or</span>
            </div>
            <div className={styles.googleSignup}>
                <button type="button"><GoogleIco />Sign up with Google</button>
            </div>
        </div>
    )
}
