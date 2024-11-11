import OurCocktailsIco from '@/assets/images/svg/ourCocktailsIco'
import styles from './ourBanner.module.scss'

export default function OurBanner() {
  return (
    <div className={styles.ourBanner}>
      <OurCocktailsIco/>
      <h1>Our Cocktails</h1>
    </div>
  )
}
