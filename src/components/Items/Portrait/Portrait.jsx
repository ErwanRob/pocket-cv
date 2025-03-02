import React from "react";
import portrait from "../../../assets/img/portraitPRO.jpg";
import styles from "./Portrait.module.scss";

const Portrait = () => {
  return (
    <div className={styles.portrait}>
      <div className={styles["portrait__container"]}>
        <img
          className={styles["portrait__container__img"]}
          src={portrait}
          alt="selfPortrait"
        />
      </div>
    </div>
  );
};

export default Portrait;
