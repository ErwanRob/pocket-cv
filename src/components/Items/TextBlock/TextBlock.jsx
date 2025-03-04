import React from "react";
import styles from "./TextBlock.module.scss";
import PropTypes from "prop-types";

const TextBlock = ({ blockTitle, source, center = false }) => {
  return (
    <div className={styles.textBlock}>
      {blockTitle && (
        <h3 className={styles["textBlock__title"]}>{blockTitle}</h3>
      )}

      <div
        className={styles[`textBlock__jobTitle${center ? "-alignCenter" : ""}`]}
      >
        {source.title}
      </div>
      {source.date && source.subtitle && (
        <div className={styles["textBlock__subtitleContainer"]}>
          <h4 className={styles["textBlock__subtitleContainer__subtitle"]}>
            {source.subtitle}
          </h4>

          <div className={styles["textBlock__subtitleContainer__separator"]} />

          <p className={styles["textBlock__subtitleContainer__date"]}>
            {source.date}
          </p>
        </div>
      )}
      <p className={styles[`textBlock__text${center ? "-alignCenter" : ""}`]}>
        {source.text}
      </p>
    </div>
  );
};

TextBlock.propTypes = {
  blockTitle: PropTypes.string,
  source: PropTypes.object.isRequired,
  center: PropTypes.bool,
};

export default TextBlock;
