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

const ItemsList = ({ title, source, hasIcons = false, layoutId }) => {
  const iconMap = {
    faEnvelope,
    faPhone,
    faHome,
    faEarthEurope,
    faLinkedinIn,
    faGithub,
    faInstagram,
  };

  const itemsListVariant = {
    itemsListVariant1: {
      itemsListClass: styles.itemsList1,
    },
    itemsListVariant2: {
      itemsListClass: styles.itemsList2,
    },
  };

  const currentItem =
    itemsListVariant[`itemsListVariant${layoutId}`] ||
    itemsListVariant.itemsListVariant1;

  return (
    <div className={currentItem.itemsListClass}>
      <h3 className={styles[`itemsList${layoutId}__title`]}>{title}</h3>
      <div className={styles[`itemsList${layoutId}__container`]}>
        {source.map((item) => (
          <div
            key={item.text}
            className={styles[`itemsList${layoutId}__container__item`]}
          >
            <div
              className={
                styles[
                  `itemsList${layoutId}__container__item__bullet${
                    hasIcons ? "-icon" : ""
                  }`
                ]
              }
            >
              {hasIcons ? <FontAwesomeIcon icon={iconMap[item.icon]} /> : null}
            </div>
            <p className={styles[`itemsList${layoutId}__container__item__txt`]}>
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
  layoutId: PropTypes.string,
};

export default ItemsList;
