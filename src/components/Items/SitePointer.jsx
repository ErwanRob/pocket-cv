import React from "react";
import styles from "./SitePointer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

const SitePointer = () => {
  return (
    <div className={styles.sitePointer}>
      <FontAwesomeIcon
        icon={faArrowPointer}
        className={styles["sitePointer__icon"]}
      />
    </div>
  );
};

export default SitePointer;
