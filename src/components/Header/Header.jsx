import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ downloadPDF }) => {
  return (
    <div className={styles.header}>
      <nav className={styles["header__nav"]}>
        <Link className={styles["header__nav__link"]} to="/cv/fr/barrista">
          Barrista (FR)
        </Link>
        <Link className={styles["header__nav__link"]} to="/cv/en/barrista">
          Barrista (EN)
        </Link>
        <Link className={styles["header__nav__link"]} to="/cv/fr/frontEnd">
          Front-End (FR)
        </Link>
        <Link className={styles["header__nav__link"]} to="/cv/en/frontEnd">
          Front-End (EN)
        </Link>
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
