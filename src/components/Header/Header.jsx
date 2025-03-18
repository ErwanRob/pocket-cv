import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "motion/react";
import { useState } from "react";
/* import frFlag from "../../assets/img/icon/frFlag.png"; */
import DropDown from "../DropDown/DropDown";

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
      {/*-------- DISCLAIMER -------- */}
      <AnimatePresence mode="popLayout">
        <Motion.div
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
          <Motion.p
            className={styles["header__disclaimer__txt"]}
            initial="closed"
            animate={disclaimerOpen}
            variants={variants2}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            ➖ Pocket CV - is a personal project created to meet my specific
            needs. And yes, i had some fun along the way. 🤓
          </Motion.p>
        </Motion.div>
      </AnimatePresence>
      {/* -------- NAVIGATION MENU -------- */}
      {/* <nav className={styles["header__nav"]}>
        <NavLink
          to="/cv/fr/frontEnd"
          className={({ isActive }) =>
            isActive
              ? `${styles["header__nav__link"]} ${styles["header__nav__link--active"]}`
              : styles["header__nav__link"]
          }
        >
          <p>Front-End</p>
          <img src={frFlag} alt="French Flag" />
        </NavLink>
        <DropDown />
      </nav> */}
      {/* -------- DOWNLOAD BUTTON -------- */}
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
