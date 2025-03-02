import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Contact.module.scss";

const infoList = [
  { icon: faEnvelope, text: "erobin.contact@gmail.com" },
  { icon: faPhone, text: "+33 (0)6 10 50 28 37" },
  { icon: faHome, text: "Strasbourg (67)" },
  { icon: faEarthEurope, text: "France" },
  { icon: faLinkedinIn, text: "Erwan Robin" },
  { icon: faGithub, text: "ErwanRob" },
  { icon: faInstagram, text: "erwan.rob" },
];

const Contact = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles["contactInfo__container"]}>
        {infoList.map((item) => (
          <div
            key={item.text}
            className={styles["contactInfo__container__item"]}
          >
            <FontAwesomeIcon icon={item.icon} />
            <p className={styles["contactInfo__container__item__txt"]}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
