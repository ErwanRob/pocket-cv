import React from "react";
import PropTypes from "prop-types";
import styles from "./TextBlock.module.scss";

const TextBlock = ({
  blockTitle,
  source,
  layoutId,
  center = false,
  customStyle,
}) => {
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

  if (!source) {
    console.log("source is null in TextBlock");
    return (
      <div className={styles.loadingError}>
        There was an error loading ressources in TextBlock component, please try
        again. Verify data target in CVConfig.jsx & json.
      </div>
    );
  }

  return (
    <div className={currentBlock.textBlockClass} style={customStyle}>
      {blockTitle && (
        <h3 className={styles[`textBlock${layoutId}__title`]}>{blockTitle}</h3>
      )}
      {source.title && (
        <div
          className={
            styles[
              `textBlock${layoutId}__jobTitle${center ? "-alignCenter" : ""}`
            ]
          }
        >
          {source.title}
        </div>
      )}
      {source.subtitle && (
        <div className={styles[`textBlock${layoutId}__subtitleContainer`]}>
          <h4
            className={
              styles[`textBlock${layoutId}__subtitleContainer__subtitle`]
            }
          >
            {source.subtitle}
          </h4>
          {source.date && source.subtitle && (
            <div
              className={
                styles[`textBlock${layoutId}__subtitleContainer__separator`]
              }
            />
          )}
          <p
            className={styles[`textBlock${layoutId}__subtitleContainer__date`]}
          >
            {source.date}
          </p>
        </div>
      )}

      {source.text && (
        <p className={styles[`textBlock${layoutId}__text`]}>{source.text}</p>
      )}
    </div>
  );
};

TextBlock.propTypes = {
  /* blockTitle: PropTypes.bool, */
  blockTitle: PropTypes.string,
  source: PropTypes.object.isRequired,
  layoutId: PropTypes.string,
  center: PropTypes.bool,
  customStyle: PropTypes.object,
};

export default TextBlock;

// if text center
// add  ${center ? "-alignCenter" : ""}
// to
// <p className={styles[`textBlock${layoutId}__text`]}>{source.text}</p>
