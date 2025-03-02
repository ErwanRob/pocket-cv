import React from "react";
import styles from "./CV.module.scss";
/* import TopSection from "../Section/TopSection.jsx";
import LeftSection from "../Section/LeftSection.jsx";
import RightSection from "../Section/RightSection.jsx"; */
/* import BottomSection from "../Section/BottomSection.jsx"; */
import SectionTitle from "../SectionTitle/SectionTitle.jsx";

import Contact from "../Items/Contact/Contact.jsx";
import Portrait from "../Items/Portrait/Portrait.jsx";

const CV = () => {
  return (
    <div className={styles.cv}>
      <div className={styles["cv__layoutGrid"]}>
        <div className={styles["cv__layoutGrid__topSection"]}>
          <Portrait />
          TopSection
        </div>
        <div className={styles["cv__layoutGrid__leftSection"]}>
          <SectionTitle title="Contact" />
          <Contact />
          <SectionTitle title="Contact" />
          <Contact />
          <SectionTitle title="Contact" />
          <Contact />
        </div>
        <div className={styles["cv__layoutGrid__rightSection"]}>
          RightSection
        </div>
        {/*   <div className={styles["cv__layoutGrid__bottomSection"]}>
          BottomSection
        </div> */}
      </div>
    </div>
  );
};

export default CV;
