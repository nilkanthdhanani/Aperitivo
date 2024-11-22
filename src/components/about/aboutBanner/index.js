"use client";
import styles from './aboutBanner.module.scss';

import AboutIco from '@/assets/images/svg/aboutIco';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AboutBanner() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <section className={styles.aboutBanner} data-aos="fade-up">
      <AboutIco />
      <h1>About</h1>
    </section>
  )
}
