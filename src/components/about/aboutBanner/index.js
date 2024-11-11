import AboutIco from '@/assets/images/svg/aboutIco'
import styles from './aboutBanner.module.scss'

export default function AboutBanner() {
  return (
    <section className={styles.aboutBanner}>
      <AboutIco />
      <h1>About</h1>
    </section>
  )
}
