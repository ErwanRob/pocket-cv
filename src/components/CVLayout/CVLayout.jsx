import { AnimatePresence, motion } from "motion/react";
import styles from "./CVLayout.module.scss";
import PropTypes from "prop-types";
import Portrait from "../Items/Portrait/Portrait.jsx";
import ItemsList from "../Items/ItemsList/ItemsList.jsx";
import HeadBand from "../Items/HeadBand/HeadBand";
import TextBlock from "../Items/TextBlock/TextBlock.jsx";

const CVLayout = ({ layoutType, data }) => {
  const layoutId = layoutType === "layout1" ? "1" : "2";
  const layouts = {
    layout1: {
      gridClass: styles.layoutGrid1,
      section: {
        top: () => <HeadBand />,
        left: () => (
          <>
            <TextBlock
              source={data.TBL.Profil.items[0]}
              center={true}
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
              source={data.TBL.Experiences.items[2]}
              layoutId={layoutId}
            />
            <TextBlock
              source={data.TBL.Experiences.items[1]}
              layoutId={layoutId}
            />
            {/*   <TextBlock source={data.TBL.Experiences[0]} layoutId={layoutId} /> */}
            <TextBlock
              blockTitle={data.TBL.Studies.blockTitle}
              source={data.TBL.Studies.items[2]}
              layoutId={layoutId}
            />
            <TextBlock source={data.TBL.Studies.items[1]} layoutId={layoutId} />
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
      gridClass: styles.layoutGrid2,
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
              source={data.TBL.Profil.items[0]}
              center={false}
              layoutId={layoutId}
            />
            <TextBlock
              blockTitle={data.TBL.Experiences.blockTitle}
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
  };

  const currentLayout = layouts[layoutType] || layouts.layout1;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={currentLayout.gridClass}
        initial={{ /* x: "100%", */ opacity: 0, scale: 0.95 }}
        animate={{ /* x: 0, */ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        exit={{ /*  x: "-100% ", */ opacity: 0, scale: 0.95 }}
        key={layoutType}
      >
        {currentLayout.section.top && (
          <div className={styles[`layoutGrid${layoutId}__topSection`]}>
            {currentLayout.section.top()}
          </div>
        )}
        {currentLayout.section.left && (
          <div className={styles[`layoutGrid${layoutId}__leftSection`]}>
            {currentLayout.section.left()}
          </div>
        )}
        {currentLayout.section.right && (
          <div className={styles[`layoutGrid${layoutId}__rightSection`]}>
            {currentLayout.section.right()}
          </div>
        )}
        {currentLayout.section.bottom && (
          <div className={styles[`layoutGrid${layoutId}__bottomSection`]}>
            {currentLayout.section.bottom()}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CVLayout;

CVLayout.propTypes = {
  layoutType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
