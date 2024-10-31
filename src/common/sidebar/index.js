import UserIco from '@/assets/images/svg/userIco';
import styles from './sidebar.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar({ isActive, toggleMenu }) {  
  const pathname = usePathname();

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <aside className={`${styles.sidebar} ${isActive ? styles.active : ''}`}>
      <div className={styles.logo}>
        <Link href={"/"} onClick={handleLinkClick} className={pathname === '/' ? styles.active : ''}>Apéritivo</Link>
      </div>
      <div className={styles.navigation}>
        <Link href={"/our-cocktails"} onClick={handleLinkClick} className={pathname === '/our-cocktails' ? styles.active : ''}>Our Cocktails</Link>
        <Link href={"/order-online"} onClick={handleLinkClick} className={pathname === '/order-online' ? styles.active : ''}>Order Online</Link>
        <Link href={"/about"} onClick={handleLinkClick} className={pathname === '/about' ? styles.active : ''}>About</Link>
        <Link href={"/about#contact"} onClick={handleLinkClick}>Contact</Link>
        <Link href={"/login"} onClick={handleLinkClick}><UserIco /> Log In</Link>
      </div>
    </aside>
  )
}
