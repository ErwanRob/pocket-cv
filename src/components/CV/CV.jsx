import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CV.module.scss";
import CVLayout from "../CVLayout/CVLayout.jsx";

const CV = () => {
  const { language, cvType } = useParams();
  const [data, setData] = useState(null);
  const [layoutType, setLayoutType] = useState("layout1");

  useEffect(() => {
    const url = `/data/${language}/${cvType}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));

    //set layout type based on cvType if needed later on (barrista vs frontEnd)
    setLayoutType(cvType === "frontEnd" ? "layout1" : "layout2");
  }, [language, cvType]);

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div
      className={styles.cv}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: -100 }}
    >
      <CVLayout layoutType={layoutType} data={data} />
    </div>
  );
};

export default CV;

{
  /* <button className={styles["cv__layoutButton"]} onClick={handleLayout}>
        Change layout :
        <span className={styles["cv__layoutButton__display"]}>
          {layoutType}
        </span>
      </button> 
      
        //Button is disabled for print purposes (not working, doesnt disapear on print)
  const handleLayout = () => {
    setLayoutType((prev) => (prev === "layout1" ? "layout2" : "layout1"));
  };
*/
}
