import Image from 'next/image'
import styles from './collection.module.scss'
import Link from 'next/link'

import cocktail1 from '@/assets/images/webp/cocktail1.webp'
import cocktail2 from '@/assets/images/webp/cocktail2.webp'
import cocktail3 from '@/assets/images/webp/cocktail3.webp'

const fixture = [
    {
        img: cocktail1,
        title: 'Oldies Remix',
        link: '/'
    },
    {
        img: cocktail2,
        title: 'Bitter Galore',
        link: '/'
    },
    {
        img: cocktail3,
        title: 'Floral Fusion',
        link: '/'
    },
]

export default function Collection() {
    return (
        <section className={styles.collection}>
            <div className={styles.container}>
                <div className={styles.collectionContent}>
                    <h2>Cocktail Collections</h2>
                    <p>Discover our exclusive cocktail collection, crafted with the finest ingredients to elevate any occasion. Experience bold flavors, vibrant colors, and unforgettable moments in every sip.</p>
                </div>
                <div className={styles.collectionGrid}>
                    {fixture.map((item, index) => (
                        <div className={styles.collectionGridDiv} key={index}>
                            <div className={styles.collectionGridImg}>
                                <Image src={item.img} alt={item.img} />
                            </div>
                            <div className={styles.collectionGridItem}>
                                <h3>{item.title}</h3>
                                <Link href={item.link}>See All</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
