import styles from './timeFor.module.scss'

export default function TimeFor() {
    return (
        <section className={styles.timeFor}>
            <div className={styles.timeForDiv1}></div>
            <div className={styles.timeForDiv2}>
                <div className={styles.timeForContent}>
                    <h2>Time for Apéritivo</h2>
                    <p>Expertly crafted with premium spirits and natural ingredients</p>
                </div>
            </div>
        </section>
    )
}
