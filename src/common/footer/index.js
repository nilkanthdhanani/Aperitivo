
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerDiv}>
          <div className={styles.footerContact}>
            <h2>Contact</h2>
            <div className={styles.footerMail}>
              <Link href={"mailto:info@mysite.com"}>info@mysite.com</Link>
              <span>123-456-7890</span>
            </div>
            <span>500 Terry Francine Street</span>
            <span>San Francisco, CA 94158</span>
          </div>
          <div className={styles.footerLogo}>
            <div className={styles.logo}>
              <Link href={"/"}>Apéritivo</Link>
            </div>
            <div className={styles.footerLink}>
              <Link href={"https://www.facebook.com/"} target='_blank'>Facebook</Link>
              <div className={styles.footerLinkDot}></div>
              <Link href={"https://x.com/"} target='_blank'>Twitter</Link>
              <div className={styles.footerLinkDot}></div>
              <Link href={"https://www.instagram.com/"} target='_blank'>Instagram</Link>
            </div>
          </div>
          <div className={styles.footerContact}>
            <h2>Service</h2>
            <div className={styles.footerMail}>
              <span>Same-Day delivery</span>
              <span>All over San Francisco</span>
            </div>
            <span>Mon - Fri: 11am - 10pm</span>
            <span>Sat - Sun: 11am - 12am</span>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>©2035 by Apéritivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
