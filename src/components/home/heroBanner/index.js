import Image from 'next/image';
import styles from './heroBanner.module.scss';
import heroImg1 from '@/assets/images/webp/heroImg1.webp';
import heroImg2 from '@/assets/images/webp/heroImg2.webp';
import heroImg3 from '@/assets/images/webp/heroImg3.webp';
import heroImg4 from '@/assets/images/webp/heroImg4.webp';
import heroImg5 from '@/assets/images/webp/heroImg5.webp';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY * -0.0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={styles.heroBanner}
      style={{
        backgroundPositionY: `${scrollPosition}px`,
      }}
    >
      <div className={styles.heroBannerContent} data-aos="fade-down">
        <div className={styles.heroBannerInner}>
          <div
            className={`${styles.heroBannerImage} ${isFading ? styles.fadeOut : styles.fadeIn
              }`}
          >
            <Image
              src={[heroImg1, heroImg2, heroImg3, heroImg4, heroImg5][currentImageIndex]}
              alt={`heroImg${currentImageIndex + 1}`}
              key={currentImageIndex}
            />
          </div>
        </div>
        <div className={styles.heroBannerText}>
          <div className={styles.heroTitle}>
            <h1>Apéritivo</h1>
            <p>Finest Cocktails. Delivered</p>
            <Link href={'/order-online'}>
              <button type="button">Order Online</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}