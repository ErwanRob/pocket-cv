import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CV.module.scss";
import CVLayout from "../CVLayout/CVLayout.jsx";

const CV = () => {
  const { language, cvType } = useParams();
  const [data, setData] = useState(null);
  const [layoutType, setLayoutType] = useState("layout1");

  //Button for it is disabled for print purposes
  const handleLayout = () => {
    setLayoutType((prev) => (prev === "layout1" ? "layout2" : "layout1"));
  };

  useEffect(() => {
    const url = `/data/${language}/${cvType}.json`;
    console.log("Fetching data from:", url);
    fetch(url)
      /*   fetch(`/data/${language}/${cvType}.json`) */
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));

    //set layout type based on cvType if needed later on (barrista vs frontEnd)
    setLayoutType(cvType === "barrista" ? "layout1" : "layout2");
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
      <button className={styles["cv__layoutButton"]} onClick={handleLayout}>
        Change layout :
        <span className={styles["cv__layoutButton__display"]}>
          {layoutType}
        </span>
      </button>
    </div>
  );
};

export default CV;
