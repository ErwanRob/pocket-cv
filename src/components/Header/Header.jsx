import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles["header__nav"]}>
        <ul className={styles["header__nav__list"]}>
          <li className={styles["header__nav__list__item"]}>
            <a href="#" className={styles["header__nav__list__item__link"]}>
              CV for developers
            </a>
          </li>
          <li className={styles["header__nav__list__item"]}>
            <a href="#" className={styles["header__nav__list__item__link"]}>
              CV for general jobs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
