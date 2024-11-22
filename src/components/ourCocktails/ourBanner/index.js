"use client"
import { useEffect } from 'react';
import styles from './ourBanner.module.scss'

import OurCocktailsIco from '@/assets/images/svg/ourCocktailsIco'

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function OurBanner() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <section className={styles.ourBanner} data-aos="fade-up">
      <OurCocktailsIco />
      <h1>Our Cocktails</h1>
    </section>
  )
}
