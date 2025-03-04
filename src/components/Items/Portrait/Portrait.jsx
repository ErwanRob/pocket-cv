import React from "react";
import PropTypes from "prop-types";
import styles from "./Portrait.module.scss";
import portrait from "../../../assets/img/portraitPRO.jpg";

const Portrait = ({ layoutId }) => {
  const portraitVariant = {
    portraitVariant1: {
      portraitClass: styles.portrait1,
    },
    portraitVariant2: {
      portraitClass: styles.portrait2,
    },
  };

  const currentPortrait =
    portraitVariant[`portraitVariant${layoutId}`] ||
    portraitVariant.portraitVariant1;

  return (
    <div className={currentPortrait.portraitClass}>
      <div className={styles[`portrait${layoutId}__container`]}>
        <img
          className={styles[`portrait${layoutId}__container__img`]}
          src={portrait}
          alt="selfPortrait"
        />
      </div>
    </div>
  );
};

Portrait.propTypes = {
  layoutId: PropTypes.string,
};

export default Portrait;
