import styles from './signIn.module.scss'

import EyeIco from '@/assets/images/svg/eyeIco';

export default function SignUp() {
    return (
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
            </div>
        </form>
    )
}
