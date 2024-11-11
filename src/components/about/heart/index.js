import styles from './heart.module.scss'

export default function Heart() {
    return (
        <section className={styles.heart}>
            <div className={styles.heartContent}>
                <h2>We Put Our Heart in Every Mix</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </section>
    )
}
