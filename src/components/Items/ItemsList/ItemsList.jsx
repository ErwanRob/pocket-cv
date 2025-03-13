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

const ItemsList = ({
  blockTitle = false,
  source,
  hasIcons = false,
  layoutId,
  color,
}) => {
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

  if (!source) {
    console.log("source is null in itemsList");
    return (
      <div className="loadingError">
        There was an error loading ressources in itemsList component, please try
        again.
      </div>
    );
  }

  return (
    <div
      className={currentItem.itemsListClass}
      style={color ? { "--item-txt-color": color } : {}}
    >
      {blockTitle && (
        <h3 className={styles[`itemsList${layoutId}__title`]}>
          {source.blockTitle}
        </h3>
      )}
      <div className={styles[`itemsList${layoutId}__container`]}>
        {source.items.map((item) => (
          <div
            key={item.id}
            className={styles[`itemsList${layoutId}__container__item`]}
          >
            <div
              className={
                styles[`itemsList${layoutId}__container__item__bulletContainer`]
              }
            >
              <div
                className={
                  styles[
                    `itemsList${layoutId}__container__item__bulletContainer__bullet${
                      hasIcons ? "-icon" : ""
                    }`
                  ]
                }
              >
                {hasIcons ? (
                  <FontAwesomeIcon icon={iconMap[item.icon]} />
                ) : null}
              </div>
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
  source: PropTypes.shape({
    blockTitle: PropTypes.string, // CAREFULL, there is 2 blockTitle
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string,
        text: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  blockTitle: PropTypes.bool, // CAREFULL, there is 2 blockTitle
  hasIcons: PropTypes.bool,
  layoutId: PropTypes.string,
  color: PropTypes.string,
};

export default ItemsList;
