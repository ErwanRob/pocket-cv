import { AnimatePresence, motion as Motion } from "motion/react";
import styles from "./CVGenerator.module.scss";
import PropTypes from "prop-types";

const CVGenerator = ({ layoutId, sectionConfig }) => {
  const gridClass = layoutId === "1" ? styles.layoutGrid1 : styles.layoutGrid2;

  return (
    <AnimatePresence mode="wait">
      <Motion.div
        className={gridClass}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        exit={{ opacity: 0, scale: 0.95 }}
        key={layoutId}
      >
        {sectionConfig.top && (
          <div className={styles[`layoutGrid${layoutId}__topSection`]}>
            {sectionConfig.top()}
          </div>
        )}
        {sectionConfig.left && (
          <div className={styles[`layoutGrid${layoutId}__leftSection`]}>
            {sectionConfig.left()}
          </div>
        )}
        {sectionConfig.right && (
          <div className={styles[`layoutGrid${layoutId}__rightSection`]}>
            {sectionConfig.right()}
          </div>
        )}
        {sectionConfig.bottom && (
          <div className={styles[`layoutGrid${layoutId}__bottomSection`]}>
            {sectionConfig.bottom()}
          </div>
        )}
      </Motion.div>
    </AnimatePresence>
  );
};

export default CVGenerator;

CVGenerator.propTypes = {
  data: PropTypes.object.isRequired,
  sectionConfig: PropTypes.object.isRequired,
};

/* const layouts = {
  layout1: {
    //CV Developpeur front end
    gridClass: styles.layoutGrid1,
    section: {
      top: null,
      left: () => (
        <>
          <Portrait layoutId={layoutId} />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Values}
            layoutId={layoutId}
          />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Skills}
            layoutId={layoutId}
          />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Language}
            layoutId={layoutId}
          />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Contact}
            hasIcons={true}
            layoutId={layoutId}
          />
        </>
      ),
      right: () => (
        <>
          <TextBlock
            blockTitle={data.TBL.Profil.blockTitle}
            source={data.TBL.Profil.items[0]}
            center={false}
            layoutId={layoutId}
          />
          <ItemsList
            blockTitle={false}
            source={data.DTL.SkillsHeadline}
            layoutId={layoutId}
            color={"#000"}
          />

          <TextBlock
            blockTitle={data.TBL.Experiences.blockTitle}
            source={data.TBL.Experiences.items[0]}
            layoutId={layoutId}
          />
          <TextBlock
            blockTitle={data.TBL.Studies.blockTitle}
            source={data.TBL.Studies.items[1]}
            layoutId={layoutId}
          />
          <TextBlock source={data.TBL.Studies.items[0]} layoutId={layoutId} />
          <TextBlock
            blockTitle={data.TBL.Hobbies.blockTitle}
            source={data.TBL.Hobbies.items[0]}
            layoutId={layoutId}
          />
        </>
      ),
      bottom: null,
    },
  },
  layout2: {
    //Barista
    gridClass: styles.layoutGrid2,
    section: {
      top: () => <HeadBand title="BARISTA - SERVEUR" />,
      left: () => (
        <>
          <TextBlock
            source={data.TBL.Profil.items[0]}
            center={true}
            customStyle={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            layoutId={layoutId}
          />
          <Portrait layoutId={layoutId} />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Values}
            layoutId={layoutId}
          />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Skills}
            layoutId={layoutId}
          />
          <ItemsList
            blockTitle={true}
            source={data.DTL.Language}
            layoutId={layoutId}
          />
        </>
      ),
      right: () => (
        <>
          <TextBlock
            blockTitle={data.TBL.Experiences.blockTitle}
            source={data.TBL.Experiences.items[4]}
            layoutId={layoutId}
          />
          <TextBlock
            source={data.TBL.Experiences.items[3]}
            layoutId={layoutId}
          />
          <TextBlock
            source={data.TBL.Experiences.items[2]}
            layoutId={layoutId}
          />
          <TextBlock
            source={data.TBL.Experiences.items[1]}
            layoutId={layoutId}
          />
          <TextBlock
            source={data.TBL.Experiences.items[0]}
            layoutId={layoutId}
          />
          <TextBlock
            blockTitle={data.TBL.Studies.blockTitle}
            source={data.TBL.Studies.items[2]}
            layoutId={layoutId}
          />
          <TextBlock source={data.TBL.Studies.items[1]} layoutId={layoutId} />
          <TextBlock source={data.TBL.Studies.items[0]} layoutId={layoutId} />
        
        </>
      ),
      bottom: null,
    },
  },
}; */

{
  /* <TextBlock
            blockTitle={data.TBL.Hobbies.blockTitle}
            source={data.TBL.Hobbies.items[0]}
            layoutId={layoutId}
          /> */
}
