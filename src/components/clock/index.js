import ChooseMix from '@/assets/images/svg/chooseMix'
import styles from './clock.module.scss'
import PlaceOrder from '@/assets/images/svg/placeOrder'
import AddIce from '@/assets/images/svg/addIce'

export default function Clock() {
  return (
    <section className={styles.clock}>
      <div className={styles.container}>
        <h2>It's Cocktail O'clock</h2>
        <div className={styles.clockGrid}>
          <div className={styles.clockGridBox}>
            <ChooseMix />
            <h2>Choose Your Mix</h2>
            <p>Pick from our premium mixes to start crafting your cocktail, tailored to your taste.</p>
          </div>
          <div className={styles.clockGridBox}>
            <PlaceOrder />
            <h2>Place Your Order</h2>
            <p>Simply place your order and let us handle the rest for a seamless experience.</p>
          </div>
          <div className={styles.clockGridBox}>
            <AddIce />
            <h2>Add the Ice</h2>
            <p>Add ice to chill and enjoy your perfect cocktail, ready for every occasion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
