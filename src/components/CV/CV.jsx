import React from "react";
import styles from "./CV.module.scss";
/* import TopSection from "../Section/TopSection.jsx";
import LeftSection from "../Section/LeftSection.jsx";
import RightSection from "../Section/RightSection.jsx"; */
/* import BottomSection from "../Section/BottomSection.jsx"; */

import Portrait from "../Items/Portrait/Portrait.jsx";
import ItemsList from "../Items/ItemsList/ItemsList.jsx";
import HeadBand from "../Items/HeadBand/HeadBand.jsx";
import TextBlock from "../Items/TextBlock/TextBlock.jsx";

/* import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons"; */
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const valuesList = [
  { text: "Autonomie" },
  { text: "Communication" },
  { text: "Esprit d'equipe" },
  { text: "Persérvérence" },
];

/* const contactListFull = [
  { icon: faEnvelope, text: "erobin.contact@gmail.com" },
  { icon: faPhone, text: "06 10 50 28 37" },
  { icon: faHome, text: "Strasbourg (67)" },
  { icon: faEarthEurope, text: "France" },
  { icon: faLinkedinIn, text: "Erwan Robin" },
  { icon: faGithub, text: "ErwanRob" },
  { icon: faInstagram, text: "erwan.rob" },
]; */

const contactListShort = [
  { icon: faLinkedinIn, text: "Erwan Robin" },
  { icon: faGithub, text: "ErwanRob" },
  { icon: faInstagram, text: "erwan.rob" },
];

const skillsListBarrista = [
  { text: "Service" },
  { text: "Relation client" },
  { text: "Manutention" },
];

const TextBlockList = [
  {
    subtitle: "Baccalauréat",
    text: "Option SI (Sciences de l'Ingénieur)",
    date: "2012",
  },
  {
    subtitle: "Developpeur Web Front-End",
    text: "OpenClasrooms",
    date: "2023-2024",
  },
];

const languageList = [{ text: "Français" }, { text: "Anglais (Avancé)" }];

const CV = () => {
  return (
    <div className={styles.cv}>
      <div className={styles["cv__layoutGrid"]}>
        <div className={styles["cv__layoutGrid__topSection"]}>
          <HeadBand />
        </div>
        <div className={styles["cv__layoutGrid__leftSection"]}>
          <Portrait />
          {/* <TextBlock blockTitle="Education" source={TextBlockList[1]} />
          <TextBlock source={TextBlockList[0]} /> */}
          <ItemsList title="Competences" source={skillsListBarrista} />
          <ItemsList title="Valeurs" source={valuesList} />
          <ItemsList title="Langue" source={languageList} />
          <ItemsList
            title="Socials"
            source={contactListShort}
            hasIcons={true}
          />
        </div>
        <div className={styles["cv__layoutGrid__rightSection"]}>
          <TextBlock blockTitle="Profil" source={TextBlockList[1]} />
          <TextBlock source={TextBlockList[0]} />
          <TextBlock blockTitle="Experience" source={TextBlockList[1]} />
          <TextBlock source={TextBlockList[0]} />
          <TextBlock blockTitle="Education" source={TextBlockList[1]} />
          <TextBlock source={TextBlockList[0]} />
          <TextBlock blockTitle="A propos de moi" source={TextBlockList[1]} />
          <TextBlock source={TextBlockList[0]} />
        </div>
        {/*   <div className={styles["cv__layoutGrid__bottomSection"]}>
          BottomSection
        </div> */}
      </div>
    </div>
  );
};

export default CV;
