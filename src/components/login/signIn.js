import styles from './signIn.module.scss'

import Link from 'next/link';
import EyeIco from '@/assets/images/svg/eyeIco';

export default function SignIn() {
    return (
        <form>
            <div className={styles.formInput}>
                <input type="text" placeholder="Username" required></input>
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
                <Link href={"/"}>Forgot password?</Link>
            </div>
            <div className={styles.signInButton}>
                <button>Sign in</button>
            </div>
        </form>
    )
}
