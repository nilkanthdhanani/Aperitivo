import styles from './timeFor.module.scss'

export default function TimeFor() {
    return (
        <section className={styles.timeFor}>
            <div className={styles.timeForDiv1}></div>
            <div className={styles.timeForDiv2}>
                <div className={styles.timeForContent}>
                    <span>Time for Apéritivo</span>
                    <h2>Expertly crafted with premium spirits and natural ingredients</h2>
                </div>
            </div>
        </section>
    )
}
