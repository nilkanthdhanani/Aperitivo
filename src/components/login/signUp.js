import styles from './loginMain.module.scss'

import EyeIco from '@/assets/images/svg/eyeIco';

export default function SignUp() {
    return (
        <form>
            <div className={styles.formInput}>
                <input type="text" placeholder="" required></input>
                <label htmlFor="username">Name</label>
            </div>
            <div className={styles.formInput}>
                <input type="email" placeholder="" required></input>
                <label htmlFor="username">Email</label>
            </div>
            <div className={styles.formInput2}>
                <input type="password" id="password" placeholder=" " required />
                <label htmlFor="password">Password</label>
                <div className={styles.eyeicon}>
                    <EyeIco />
                </div>
            </div>
            <div className={styles.signInButton}>
                <button>Sign up</button>
            </div>
        </form>
    )
}
