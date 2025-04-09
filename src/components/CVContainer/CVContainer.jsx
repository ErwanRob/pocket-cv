import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./CVContainer.module.scss";
import CVGenerator from "../CVGenerator/CVGenerator.jsx";
import { getSectionConfig } from "../DataConfig/SectionConfig.jsx";

const CVContainer = () => {
  const { language, cvType } = useParams();
  const [data, setData] = useState(null);
  const [layoutId, setLayoutId] = useState("1");

  useEffect(() => {
    const url = `/data/${language}/${cvType}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    setLayoutId(cvType === "frontEnd" ? "1" : "2");
  }, [language, cvType]);

  if (!data) {
    return <div className={styles.loading}>Loading data...</div>;
  }
  const sectionConfig = getSectionConfig(cvType, data, layoutId);

  return (
    <div className={styles.cvContainer}>
      <CVGenerator layoutId={layoutId} sectionConfig={sectionConfig} />
    </div>
  );
};

export default CVContainer;
