import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = ({ downloadPDF }) => {
  return (
    <div className={styles.header}>
      <p className={styles["header__disclaimer"]}>
        🚧❗ Pocket CV - is a simple project for my own use/needs ❗🚧
      </p>
      <nav className={styles["header__nav"]}>
        <NavLink
          to="/cv/fr/barrista"
          className={({ isActive }) =>
            isActive
              ? `${styles["header__nav__link"]} ${styles["header__nav__link--active"]}`
              : styles["header__nav__link"]
          }
        >
          Barrista (FR)
        </NavLink>
        <NavLink
          to="/cv/en/barrista"
          className={({ isActive }) =>
            isActive
              ? `${styles["header__nav__link"]} ${styles["header__nav__link--active"]}`
              : styles["header__nav__link"]
          }
        >
          Barrista (EN)
        </NavLink>
        <NavLink
          to="/cv/fr/frontEnd"
          className={({ isActive }) =>
            isActive
              ? `${styles["header__nav__link"]} ${styles["header__nav__link--active"]}`
              : styles["header__nav__link"]
          }
        >
          Front-End (FR)
        </NavLink>
        <NavLink
          to="/cv/en/frontEnd"
          className={({ isActive }) =>
            isActive
              ? `${styles["header__nav__link"]} ${styles["header__nav__link--active"]}`
              : styles["header__nav__link"]
          }
        >
          Front-End (EN)
        </NavLink>
      </nav>
      <button
        className={styles["header__downloadButton"]}
        onClick={downloadPDF}
      >
        Download PDF
      </button>
    </div>
  );
};

Header.propTypes = {
  downloadPDF: PropTypes.func.isRequired,
  handleDownloadImg: PropTypes.func.isRequired,
};

export default Header;
