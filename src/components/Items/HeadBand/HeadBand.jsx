import React from "react";
import styles from "./HeadBand.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HeadBand = () => {
  return (
    <div className={styles.headBand}>
      <div className={styles["headBand__initials"]}>E | R</div>
      <h1 className={styles["headBand__name"]}>ERWAN ROBIN</h1>
      <div className={styles["headBand__job"]}>
        <div className={styles["headBand__job__lineLeft"]} />
        <h2 className={styles["headBand__job__nomination"]}>
          SERVEUR - BARRISTA
        </h2>
        <div className={styles["headBand__job__lineRight"]} />
      </div>
      <div className={styles["headBand__shortInfo"]}>
        <div className={styles["headBand__shortInfo__item"]}>
          <FontAwesomeIcon icon={faHome} />
          <p className={styles["headBand__shortInfo__item__txt"]}>
            Strasbourg (67)
          </p>
        </div>
        <div className={styles["headBand__shortInfo__separator"]} />
        <div className={styles["headBand__shortInfo__item"]}>
          <FontAwesomeIcon icon={faPhone} />
          <p className={styles["headBand__shortInfo__item__txt"]}>
            06 10 50 28 37
          </p>
        </div>
        <div className={styles["headBand__shortInfo__separator"]} />
        <div className={styles["headBand__shortInfo__item"]}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className={styles["headBand__shortInfo__item__txt"]}>
            erobin.contact@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadBand;
