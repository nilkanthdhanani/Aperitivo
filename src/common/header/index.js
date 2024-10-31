'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import UserIco from '@/assets/images/svg/userIco';
import CartIco from '@/assets/images/svg/cartIco';
import { useState, useEffect } from 'react';
import Sidebar from '../sidebar';
import Cart from '../cart';

export default function Header() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    if (isCartOpen) {
      document.body.classList.add('no-scroll2');
    } else {
      document.body.classList.remove('no-scroll2');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll2');
    };
  }, [isActive, isCartOpen]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerDiv}>
          <div className={styles.logo}>
            <Link href={"/"} className={pathname === '/' ? styles.active : ''}>Apéritivo</Link>
          </div>
          <nav>
            <Link href={"/our-cocktails"} className={pathname === '/our-cocktails' ? styles.active : ''}>Our Cocktails</Link>
            <Link href={"/order-online"} className={pathname === '/order-online' ? styles.active : ''}>Order Online</Link>
            <Link href={"/about"} className={pathname === '/about' ? styles.active : ''}>About</Link>
            <Link href={"/about#contact"}>Contact</Link>
            <Link href={"/login"}><UserIco /> Log In</Link>
            <div className={styles.cart} onClick={toggleCart}>
              <CartIco />
              <span>0</span>
            </div>
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
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </header>
  );
}
