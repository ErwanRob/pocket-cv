import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Header = ({ downloadPDF }) => {
  const [disclaimerOpen, setDisclaimerOpen] = useState("closed");

  const variants = {
    closed: {
      width: "6rem",
      backgroundColor: "#ff91008b",
    },
    open: {
      backgroundColor: "#000",
      width: "auto",
    },
  };

  const variants2 = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  const handleDisclaimer = () => {
    setDisclaimerOpen((prev) => (prev === "open" ? "closed" : "open"));
  };

  return (
    <div className={styles.header}>
      <AnimatePresence mode="popLayout">
        <motion.div
          className={styles["header__disclaimer"]}
          initial="closed"
          animate={disclaimerOpen}
          variants={variants}
          onClick={handleDisclaimer}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {disclaimerOpen === "closed" && (
            <p className={styles["header__disclaimer__icon"]}>➕ ❗🚧</p>
          )}
          <motion.p
            className={styles["header__disclaimer__txt"]}
            initial="closed"
            animate={disclaimerOpen}
            variants={variants2}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            ➖ Pocket CV - is a personal project created to meet my specific
            needs. And yes, i had some fun along the way. 🤓
          </motion.p>
        </motion.div>
      </AnimatePresence>
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
