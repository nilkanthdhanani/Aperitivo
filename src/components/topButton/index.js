"use client";

import { useState, useEffect } from 'react';
import TopIcon from '@/assets/images/svg/topIcon';
import styles from './topButton.module.scss';

export default function TopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                // Show when scrolling up
                setIsVisible(true);
            } else {
                // Hide when scrolling down
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        isVisible && (
            <div className={styles.topButton} onClick={scrollToTop}>
                <TopIcon />
            </div>
        )
    );
}
