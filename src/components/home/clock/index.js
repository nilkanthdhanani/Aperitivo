import { useEffect } from 'react';
import styles from './clock.module.scss';

import AddIceIco from '@/assets/images/svg/addIceIco';
import ChooseMixIco from '@/assets/images/svg/chooseMixIco';
import PlaceOrderIco from '@/assets/images/svg/placeOrderIco';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Clock() {

  useEffect(() => {
    Aos.init({
        duration: 2000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <section className={styles.clock}>
      <div className={styles.container}>
        <h2>It's Cocktail O'clock</h2>
        <div className={styles.clockGrid}>
          <div className={styles.clockGridBox} data-aos="fade-right">
            <ChooseMixIco />
            <h2>Choose Your Mix</h2>
            <p>Pick from our premium mixes to start crafting your cocktail, tailored to your taste.</p>
          </div>
          <div className={styles.clockGridBox} data-aos="fade-up">
            <PlaceOrderIco />
            <h2>Place Your Order</h2>
            <p>Simply place your order and let us handle the rest for a seamless experience.</p>
          </div>
          <div className={styles.clockGridBox} data-aos="fade-left">
            <AddIceIco />
            <h2>Add the Ice</h2>
            <p>Add ice to chill and enjoy your perfect cocktail, ready for every occasion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
