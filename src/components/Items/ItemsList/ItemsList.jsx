import React from "react";
import styles from "./ItemsList.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ItemsList = ({ title, source, hasIcons = false }) => {
  const iconMap = {
    faEnvelope,
    faPhone,
    faHome,
    faEarthEurope,
    faLinkedinIn,
    faGithub,
    faInstagram,
  };

  return (
    <div className={styles.itemsList}>
      <h3 className={styles["itemsList__title"]}>{title}</h3>
      <div className={styles["itemsList__container"]}>
        {source.map((item) => (
          <div key={item.text} className={styles["itemsList__container__item"]}>
            <div
              className={
                styles[
                  `itemsList__container__item__bullet${hasIcons ? "-icon" : ""}`
                ]
              }
            >
              {hasIcons ? <FontAwesomeIcon icon={iconMap[item.icon]} /> : null}
            </div>
            <p className={styles["itemsList__container__item__txt"]}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemsList.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.array.isRequired,
  hasIcons: PropTypes.bool,
  /* variant: PropTypes.string, */
};

export default ItemsList;
