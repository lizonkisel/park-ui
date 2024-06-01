import styles from './header.module.css';

import logo from '../../logo.png';

export const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt='logo' className={styles.header__logo} />
  </header>
);