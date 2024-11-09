import Image from 'next/image'
import styles from './friends.module.scss'
import Link from 'next/link'

import cheers from '@/assets/images/gif/cheers.gif'

export default function Friends() {
    return (
        <section className={styles.friends}>
            <div className={styles.container}>
                <div className={styles.friendsContent}>
                    <Image src={cheers} alt={cheers} />
                    <h2>Apéritivo with Friends</h2>
                    <p>Raise a glass with friends and savor every moment with our unique cocktails, designed to bring people together. From refreshing classics to bold new flavors, each drink is crafted to turn any gathering into a celebration.</p>
                    <Link href={'/about'}>
                        <button type="button">Read More</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
