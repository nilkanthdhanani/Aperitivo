import styles from './timeFor.module.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function TimeFor() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: false,
        });
    }, []);
    
    return (
        <section className={styles.timeFor}>
            <div className={styles.timeForDiv1}></div>
            <div className={styles.timeForDiv2}>
                <div className={styles.timeForContent} data-aos="fade-up">
                    <h2>Time for Apéritivo</h2>
                    <p>Expertly crafted with premium spirits and natural ingredients</p>
                </div>
            </div>
        </section>
    )
}
