import React, { useState } from "react";
import styles from "./SideMenu.module.scss";
import { NavLink } from "react-router-dom";
import frFlag from "../../assets/img/icon/frFlag.png";
import ukFlag from "../../assets/img/icon/ukFlag.png";
import { AnimatePresence, motion as Motion } from "motion/react";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    closed: {
      width: "0rem",
      opacity: 0,
    },
    open: {
      width: "20rem",
      opacity: 1,
    },
  };
  const handleSideMenu = () => {
    setOpen((prev) => !prev);
  };

  const navigationList = [
    {
      title: "Front-End",
      path: "/cv/fr/frontEnd",
      icon: frFlag,
    },
    {
      title: "Barista",
      path: "/cv/fr/barista",
      icon: frFlag,
    },
    {
      title: "General",
      path: "/cv/fr/general",
      icon: frFlag,
    },
    {
      title: "Front-End",
      path: "/cv/en/frontEnd",
      icon: ukFlag,
    },
    {
      title: "Barista",
      path: "/cv/en/barista",
      icon: ukFlag,
    },
  ];

  return (
    <>
      <button
        className={`${styles.sideMenuToggle} ${
          !open ? styles["sideMenuToggle-inactive"] : ""
        }`}
        onClick={handleSideMenu}
      >
        <p className={styles["sideMenuToggle__icon"]}> {open ? "➖" : "➕"} </p>
        <p className={styles["sideMenuToggle__txt"]}>Menu</p>
      </button>
      <AnimatePresence>
        <Motion.div
          className={styles.sideMenu}
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div className={styles["sideMenu__container"]}>
            <nav className={styles["sideMenu__container__nav"]}>
              {navigationList.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["sideMenu__container__nav__link"]} ${styles["sideMenu__container__nav__link--active"]}`
                      : styles["sideMenu__container__nav__link"]
                  }
                >
                  <p>{item.title}</p>
                  <img src={item.icon} alt="French Flag" />
                </NavLink>
              ))}
            </nav>
            <div className={styles["sideMenu__container__settings"]}>
              Settings
              <ul className={styles["sideMenu__container__settings__list"]}>
                <li
                  className={
                    styles["sideMenu__container__settings__list__item"]
                  }
                >
                  <p>Layout</p>
                  <p>N/A</p>
                </li>
                <li
                  className={
                    styles["sideMenu__container__settings__list__item"]
                  }
                >
                  <p>Language</p>
                  <p>N/A</p>
                </li>
              </ul>
            </div>
          </div>
        </Motion.div>
      </AnimatePresence>
    </>
  );
};

export default SideMenu;

{
  /* <NavLink
                to="/cv/fr/frontEnd"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["sideMenu__container__nav__link"]} ${styles["sideMenu__container__nav__link--active"]}`
                    : styles["sideMenu__container__nav__link"]
                }
              >
                <p>Front-End</p>
                <img src={frFlag} alt="French Flag" />
              </NavLink>
              <NavLink
                to="/cv/fr/barista"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["sideMenu__container__nav__link"]} ${styles["sideMenu__container__nav__link--active"]}`
                    : styles["sideMenu__container__nav__link"]
                }
              >
                <p>Barista</p>
                <img src={frFlag} alt="French Flag" />
              </NavLink>
              <NavLink
                to="/cv/fr/general"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["sideMenu__container__nav__link"]} ${styles["sideMenu__container__nav__link--active"]}`
                    : styles["sideMenu__container__nav__link"]
                }
              >
                <p>General</p>
                <img src={frFlag} alt="FR Flag" />
              </NavLink>
              <NavLink
                to="/cv/en/frontEnd"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["sideMenu__container__nav__link"]} ${styles["sideMenu__container__nav__link--active"]}`
                    : styles["sideMenu__container__nav__link"]
                }
              >
                <p>Front-End</p>
                <img src={ukFlag} alt="UK Flag" />
              </NavLink>
              <NavLink
                to="/cv/en/barista"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["sideMenu__container__nav__link"]} ${styles["sideMenu__container__nav__link--active"]}`
                    : styles["sideMenu__container__nav__link"]
                }
              >
                <p>Barista</p>
                <img src={ukFlag} alt="UK Flag" />
              </NavLink> */
}
