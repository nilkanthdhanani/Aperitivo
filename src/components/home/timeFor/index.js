import { useEffect } from 'react';
import styles from './timeFor.module.scss';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function TimeFor() {

    useEffect(() => {
        Aos.init({
              duration: 2000,
            once: false,
          });
          Aos.refresh();
    }, []);

    return (
        <section className={styles.timeFor}>
            <div className={styles.timeForDiv1}></div>
            <div className={styles.timeForDiv2}>
                <div className={styles.timeForContent}>
                    <h2 data-aos="fade-left">Time for Apéritivo</h2>
                    <p data-aos="fade-left">Expertly crafted with premium spirits and natural ingredients</p>
                </div>
            </div>
        </section>
    )
}
