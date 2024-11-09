'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import UserIco from '@/assets/images/svg/userIco';
import { useState, useEffect } from 'react';
import Sidebar from '../sidebar';
import CartIco from '@/assets/images/svg/cartIco';

export default function Header() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isActive]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerDiv}>
          <div className={styles.logo}>
            <Link href={"/"} className={pathname === '/' ? styles.active : ''}>Apéritivo</Link>
          </div>
          <nav>
            <div className={styles.navItem}>
              <Link href={"/our-cocktails"} className={pathname === '/our-cocktails' ? styles.active : ''}>Our Cocktails</Link>
            </div>
            <div className={styles.navItem}>
              <Link href={"/order-online"} className={pathname === '/order-online' ? styles.active : ''}>Order Online</Link>
            </div>
            <div className={styles.navItem}>
              <Link href={"/about"} className={pathname === '/about' ? styles.active : ''}>About</Link>
            </div>
            <div className={styles.navItem}>
              <Link href={"/about#contact"}>Contact</Link>
            </div>
            <div className={styles.navItem}>
              <Link href={"/login"}><UserIco /> Log In</Link>
            </div>
            <Link href={"/cart"} className={pathname === '/cart' ? styles.active : ''}>
              <div className={styles.cart}>
                <CartIco />
                <span>0</span>
              </div>
            </Link>
            <div
              className={`${styles.menuIcon} ${isActive ? styles.active : ''}`}
              onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
      <Sidebar isActive={isActive} toggleMenu={toggleMenu} />
    </header >
  );
}
