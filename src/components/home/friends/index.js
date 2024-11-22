import { useEffect } from 'react';
import styles from './friends.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import cheers from '@/assets/images/gif/cheers.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Friends() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
            once: false,
        });
    }, []);

    return (
        <section className={styles.friends}>
            <div className={styles.container}>
                <div className={styles.friendsContent}>
                    <Image src={cheers} alt={cheers} />
                    <h2 data-aos="fade-up">Apéritivo with Friends</h2>
                    <p data-aos="fade-up">Raise a glass with friends and savor every moment with our unique cocktails, designed to bring people together. From refreshing classics to bold new flavors, each drink is crafted to turn any gathering into a celebration.</p>
                    <Link href={'/about'}>
                        <button type="button">Apéritivo Information</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
