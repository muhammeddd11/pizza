import styles from './Header.module.css'
import HeaderNav from './HeaderNav';
function Header() {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
}

export default Header;