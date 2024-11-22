"use client";
import styles from './heart.module.scss';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Heart() {
    useEffect(() => {
      Aos.init({
        duration: 2000,
        once: false,
      });
      Aos.refresh();
    }, []);
  
    return (
        <section className={styles.heart}>
            <div className={styles.heartContent} data-aos="fade-up">
                <h2>We Put Our Heart in Every Mix</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </section>
    )
}
