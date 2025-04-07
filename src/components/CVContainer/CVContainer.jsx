import React, { useState, useEffect } from "react";
import styles from "./CVContainer.module.scss";
import CVGenerator from "../CVGenerator/CVGenerator.jsx";
import { getSectionConfig } from "../DataConfig/SectionConfig.jsx";

const CVContainer = ({ language, cvType }) => {
  const [data, setData] = useState(null);
  const [layoutId, setLayoutId] = useState("1");

  useEffect(() => {
    const url = `/data/${language}/${cvType}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));

    //set layout type based on cvType if needed later on (barista vs frontEnd)
    setLayoutId(cvType === "frontEnd" ? "1" : "2");
  }, [language, cvType]);

  if (!data) {
    return <div className={styles["loading"]}>Loading data...</div>;
  }
  const sectionConfig = getSectionConfig(cvType, data, layoutId);

  return (
    <div
      className={styles.cvContainer}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: -100 }}
    >
      <CVGenerator layoutId={layoutId} sectionConfig={sectionConfig} />
    </div>
  );
};

export default CVContainer;

{
  /* <button className={styles["cv__layoutButton"]} onClick={handleLayout}>
        Change layout :
        <span className={styles["cv__layoutButton__display"]}>
          {layoutId}
        </span>
      </button> 
      
        //Button is disabled for print purposes (not working, doesnt disapear on print)
  const handleLayout = () => {
    setLayoutId((prev) => (prev === "layout1" ? "layout2" : "layout1"));
  };
*/
}
