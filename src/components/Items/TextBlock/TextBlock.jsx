import React from "react";
import styles from "./TextBlock.module.scss";
import PropTypes from "prop-types";

const TextBlock = ({ blockTitle, source, center = false, layoutId }) => {
  const textBlockVariant = {
    textBlockVariant1: {
      textBlockClass: styles.textBlock1,
    },
    textBlockVariant2: {
      textBlockClass: styles.textBlock2,
    },
  };

  const currentBlock =
    textBlockVariant[`textBlockVariant${layoutId}`] ||
    textBlockVariant.textBlockVariant1;

  return (
    <div className={currentBlock.textBlockClass}>
      {blockTitle && (
        <h3 className={styles[`textBlock${layoutId}__title`]}>{blockTitle}</h3>
      )}

      <div
        className={
          styles[
            `textBlock${layoutId}__jobTitle${center ? "-alignCenter" : ""}`
          ]
        }
      >
        {source.title}
      </div>
      {source.date && source.subtitle && (
        <div className={styles[`textBlock${layoutId}__subtitleContainer`]}>
          <h4
            className={
              styles[`textBlock${layoutId}__subtitleContainer__subtitle`]
            }
          >
            {source.subtitle}
          </h4>

          <div
            className={
              styles[`textBlock${layoutId}__subtitleContainer__separator`]
            }
          />

          <p
            className={styles[`textBlock${layoutId}__subtitleContainer__date`]}
          >
            {source.date}
          </p>
        </div>
      )}
      <p
        className={
          styles[`textBlock${layoutId}__text${center ? "-alignCenter" : ""}`]
        }
      >
        {source.text}
      </p>
    </div>
  );
};

TextBlock.propTypes = {
  blockTitle: PropTypes.string,
  source: PropTypes.object.isRequired,
  center: PropTypes.bool,
  layoutId: PropTypes.string,
};

export default TextBlock;
