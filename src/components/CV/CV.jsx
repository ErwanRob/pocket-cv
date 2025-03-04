import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CV.module.scss";

import CVLayout from "../CVLayout/CVLayout.jsx";

const CV = () => {
  const { language, cvType } = useParams();
  const [data, setData] = useState(null);
  const [layoutType, setLayoutType] = useState("layout1");

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
    <div className={styles.cv}>
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

/* import TopSection from "../Section/TopSection.jsx";
import LeftSection from "../Section/LeftSection.jsx";
import RightSection from "../Section/RightSection.jsx"; */
/* import BottomSection from "../Section/BottomSection.jsx"; */

/* 




<ItemsList
            title="Socials"
            source={contactListShort}
            hasIcons={true}
          /> 






 <TextBlock blockTitle="Profil" source={TextBlockList[1]} />
          <TextBlock source={TextBlockList[0]} /> 

  <div className={styles["cv__layoutGrid__bottomSection"]}>
          BottomSection
        </div> 
















const languageList = [{ text: "Français" }, { text: "Anglais (Avancé)" }];

const contactListFull = [
  { icon: faEnvelope, text: "erobin.contact@gmail.com" },
  { icon: faPhone, text: "06 10 50 28 37" },
  { icon: faHome, text: "Strasbourg (67)" },
  { icon: faEarthEurope, text: "France" },
  { icon: faLinkedinIn, text: "Erwan Robin" },
  { icon: faGithub, text: "ErwanRob" },
  { icon: faInstagram, text: "erwan.rob" },
];

 const contactListShort = [
  { icon: faLinkedinIn, text: "Erwan Robin" },
  { icon: faGithub, text: "ErwanRob" },
  { icon: faInstagram, text: "erwan.rob" },
];

const valuesList = [
  { text: "Autonomie" },
  { text: "Communication" },
  { text: "Esprit d'equipe" },
  { text: "Persérvérence" },
];

const skillsListBarrista = [
  { text: "Service" },
  { text: "Relation client" },
  { text: "Manutention" },
];

const TblStudies = [
  {
    title: "BAC S",
    subtitle: "S.I.",
    text: "Baccalauréat Scientifique (Option Sciences de l'Ingénieur).",
    date: "2012 - 2013",
  },
  {
    title: "Diplôme d'intégrateur Web",
    subtitle: "OpenClassrooms",
    text: "Acquisition de compétences via 12 projets de developpement web validés par des professionnels.Formation axée sur l'apprentissage du CSS, HTML, JavaScript et React & Redux.",
    date: "2023-2024",
  },
];

const TblExperiences = [
  {
    title: "Diverses fonctions dans la restauration",
    subtitle: "Huttopia, Columbus, F&Co., Strasbourg",
    text: "Cuisinier et serveur dans un restaurant pendant 2 ans. Animateur et Bartender dans un camping durant la période saisonnière",
    date: "2019 - 2022",
  },
  {
    title: "Head of Design",
    subtitle: "CreatLinx, Londres",
    text: "Co-fondateur d'une start-up blockchain/cryptomonnaie. Recrutement / Validation des designs / Développement / Participation à l'élaboration de la stratégie. Soft Skills : polyvalence, adaptabilité, créativité",
    date: "2017 - 2019",
  },
  {
    title: "Employé Polyvalent",
    subtitle: "Auchan, Illkirch",
    text: "Employé polyvalent dans un supermarché au sein de l'équipe de maintenance. Remplissage et maintiens des rayons, accueil & conseil client. Manipulation des stocks - tire-pallettes éléctriques/gerbeur, formation reçu pour l'utilisation de ces machines",
    date: "Décembre 2024",
  },
];
const TblHobbies = [
  {
    title: "Musique",
    text: "Guitare, Piano, Pad, MAO (connaissances avancées sur FL studio et plus d'une centaine de pluggins dédiés au traitement de l'audio)",
  },
];

const TblProfil = [
  {
    title: "Profil",
    text: "Je suis passionné par le développement web. J'ai plusieurs expérience dans la restauration et le service client. Je suis autodidacte et j'apprends vite. Actuellement à la recherche d'un poste me permettant de continuer mes projet personnel, tout en subvenant à mes besoins.",
  },
]; */
