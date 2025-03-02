import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
