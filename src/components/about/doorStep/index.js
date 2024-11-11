import Link from 'next/link'
import styles from './doorStep.module.scss'

export default function DoorStep() {
    return (
        <section className={styles.doorStep}>
            <div className={styles.doorStepDiv2}></div>
            <div className={styles.doorStepDiv1}>
                <h2>Aperitivo Box At Your Door</h2>
                <p>Explore a curated selection of unique cocktails, from classic blends to floral fusions, all delivered fresh to your doorstep.</p>
                <Link href={'/order-online'}>
                    <button type="button">Order Online</button>
                </Link>
            </div>
        </section>
    )
}
