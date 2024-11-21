import WaveIco from '@/assets/images/svg/waveIco';
import styles from './loginMain.module.scss';
import BackIco from '@/assets/images/svg/backIco';
import EyeIco from '@/assets/images/svg/eyeIco';
import { useState, useRef } from 'react';

export default function ForgotPass({ onClose }) {
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const modalRef = useRef(null);

    const handleChange = (value, index) => {
        if (!isNaN(value) && value.length <= 1) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleBackClick = () => {
        if (step === 1 || step === 4) {
            onClose();
        } else {
            setStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <div className={styles.forgotPass} onClick={handleClickOutside}>
            <div className={styles.forgotPassDiv} ref={modalRef}>
                <div className={styles.waveBg}>
                    <WaveIco />
                </div>
                <div className={styles.backIco} onClick={handleBackClick}>
                    <BackIco />
                </div>

                {step === 1 && (
                    <div className={styles.stepOne}>
                        <h2>Forgot Password</h2>
                        <div className={styles.entryDetailBox}>
                            <h3>Mail Address Here</h3>
                            <p>Enter the email address associated with your account.</p>
                            <div className={styles.formInput}>
                                <input type="email" placeholder="" required />
                                <label htmlFor="username">Email</label>
                            </div>
                            <div className={styles.nextStep}>
                                <button onClick={() => setStep(2)}>Recover Password</button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.stepTwo}>
                        <h2>Email Verification</h2>
                        <div className={styles.entryDetailBox}>
                            <h3>Get Your Code</h3>
                            <p>Please enter the 4-digit code sent to your email address.</p>
                            <div className={styles.otpContext}>
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        id={`otp-input-${index}`}
                                        type="text"
                                        value={value}
                                        maxLength="1"
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        required
                                    />
                                ))}
                            </div>
                            <div className={styles.resendCode}>
                                If you don't receive the code, <button type="button">Resend</button>
                            </div>
                            <div className={styles.nextStep}>
                                <button onClick={() => setStep(3)}>Verify</button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className={styles.stepThree}>
                        <h2>Reset Password</h2>
                        <div className={styles.entryDetailBox}>
                            <h3>Enter New Password</h3>
                            <p>Your new password must be different from previously used passwords.</p>
                            <div className={styles.formInput2}>
                                <input type="password" id="password" placeholder=" " required />
                                <label htmlFor="password">Password</label>
                                <div className={styles.eyeicon}>
                                    <EyeIco />
                                </div>
                            </div>
                            <div className={styles.formInput2}>
                                <input type="password" id="confirm-password" placeholder=" " required />
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <div className={styles.eyeicon}>
                                    <EyeIco />
                                </div>
                            </div>
                            <div className={styles.nextStep}>
                                <button onClick={() => setStep(4)}>Continue</button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className={styles.stepFour}>
                        <h2>Success!</h2>
                        <div className={styles.entryDetailBox}>
                            <h3>Your password has been successfully reset.</h3>
                        </div>
                        <div className={styles.nextStep}>
                            <button onClick={onClose}>Sign in</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
