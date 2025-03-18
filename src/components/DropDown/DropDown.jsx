import React, { useState } from "react";

import { AnimatePresence, motion as Motion } from "motion/react";
import styles from "./DropDown.module.scss";
import { NavLink } from "react-router-dom";
import frFlag from "../../assets/img/icon/frFlag.png";
import ukFlag from "../../assets/img/icon/ukFlag.png";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  const toggleDropDown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropDown}>
      <button
        className={
          open
            ? `${styles["dropDown__toggleButton"]} ${styles["dropDown__toggleButton--active"]}`
            : styles["dropDown__toggleButton"]
        }
        onClick={toggleDropDown}
        aria-expanded={open}
      >
        <p className={styles["dropDown__toggleButton__txt"]}>Other CVs</p>
        <span className={styles["dropDown__toggleButton__icon"]}>➕</span>
      </button>

      <AnimatePresence mode="wait">
        {open && (
          <Motion.div
            className={styles["dropDown__content"]}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
          >
            <NavLink
              to="/cv/en/frontEnd"
              onClick={toggleDropDown}
              className={({ isActive }) =>
                isActive
                  ? `${styles["dropDown__content__dropLink"]} ${styles["dropDown__content__dropLink--active"]}`
                  : styles["dropDown__content__dropLink"]
              }
            >
              <p>Front-End</p>
              <img src={ukFlag} alt="UK Flag" />
            </NavLink>
            <NavLink
              to="/cv/fr/barista"
              onClick={toggleDropDown}
              className={({ isActive }) =>
                isActive
                  ? `${styles["dropDown__content__dropLink"]} ${styles["dropDown__content__dropLink--active"]}`
                  : styles["dropDown__content__dropLink"]
              }
            >
              <p>Barista</p>
              <img src={frFlag} alt="French Flag" />
            </NavLink>
            <NavLink
              to="/cv/en/barista"
              onClick={toggleDropDown}
              className={({ isActive }) =>
                isActive
                  ? `${styles["dropDown__content__dropLink"]} ${styles["dropDown__content__dropLink--active"]}`
                  : styles["dropDown__content__dropLink"]
              }
            >
              <p>Barista</p>
              <img src={ukFlag} alt="UK Flag" />
            </NavLink>
            <NavLink
              to="/cv/fr/general"
              onClick={toggleDropDown}
              className={({ isActive }) =>
                isActive
                  ? `${styles["dropDown__content__dropLink"]} ${styles["dropDown__content__dropLink--active"]}`
                  : styles["dropDown__content__dropLink"]
              }
            >
              <p>General</p>
              <img src={frFlag} alt="FR Flag" />
            </NavLink>
            {/*   <NavLink
              to="/cv/en/general"
              onClick={toggleDropDown}
              className={({ isActive }) =>
                isActive
                  ? `${styles["dropDown__content__dropLink"]} ${styles["dropDown__content__dropLink--active"]}`
                  : styles["dropDown__content__dropLink"]
              }
            >
              <p>General</p>
              <img src={ukFlag} alt="UK Flag" />
            </NavLink> */}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
