"use client";
import styles from './doorStep.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function DoorStep() {
    useEffect(() => {
      Aos.init({
        duration: 2000,
        once: false,
      });
      Aos.refresh();
    }, []);
  
    return (
        <section className={styles.doorStep}>
            <div className={styles.doorStepDiv2}></div>
            <div className={styles.doorStepDiv1} data-aos="fade-up">
                <h2>Aperitivo Box At Your Door</h2>
                <p>Explore a curated selection of unique cocktails, from classic blends to floral fusions, all delivered fresh to your doorstep.</p>
                <Link href={'/order-online'}>
                    <button type="button">Order Online</button>
                </Link>
            </div>
        </section>
    )
}
