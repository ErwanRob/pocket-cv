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
              source={data.TBL.Profil[0]}
              center={true}
              layoutId={layoutId}
            />
            <Portrait layoutId={layoutId} />
            <ItemsList
              title="Valeurs"
              source={data.DTL.Values}
              layoutId={layoutId}
            />
            <ItemsList
              title="Competences"
              source={data.DTL.Skills}
              layoutId={layoutId}
            />
            <ItemsList
              title="Langue"
              source={data.DTL.Language}
              layoutId={layoutId}
            />
          </>
        ),
        right: () => (
          <>
            <TextBlock
              blockTitle="Experience"
              source={data.TBL.Experiences[2]}
              layoutId={layoutId}
            />
            <TextBlock source={data.TBL.Experiences[1]} layoutId={layoutId} />
            <TextBlock source={data.TBL.Experiences[0]} layoutId={layoutId} />
            <TextBlock
              blockTitle="Formation"
              source={data.TBL.Studies[1]}
              layoutId={layoutId}
            />
            <TextBlock source={data.TBL.Studies[0]} layoutId={layoutId} />
            <TextBlock
              blockTitle="A propos de moi"
              source={data.TBL.Hobbies[0]}
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
              title="Valeurs"
              source={data.DTL.Values}
              layoutId={layoutId}
            />
            <ItemsList
              title="Competences"
              source={data.DTL.Skills}
              layoutId={layoutId}
            />
            <ItemsList
              title="Langue"
              source={data.DTL.Language}
              layoutId={layoutId}
            />
            <ItemsList
              title="Contact"
              source={data.DTL.Contact}
              hasIcons={true}
              layoutId={layoutId}
            />
          </>
        ),
        right: () => (
          <>
            <TextBlock
              source={data.TBL.Profil[0]}
              center={false}
              layoutId={layoutId}
            />
            <TextBlock
              blockTitle="Experience"
              source={data.TBL.Experiences[2]}
              layoutId={layoutId}
            />
            <TextBlock source={data.TBL.Experiences[1]} layoutId={layoutId} />
            <TextBlock source={data.TBL.Experiences[0]} layoutId={layoutId} />
            <TextBlock
              blockTitle="Formation"
              source={data.TBL.Studies[1]}
              layoutId={layoutId}
            />
            <TextBlock source={data.TBL.Studies[0]} layoutId={layoutId} />
            <TextBlock
              blockTitle="A propos de moi"
              source={data.TBL.Hobbies[0]}
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
    <div className={currentLayout.gridClass}>
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
    </div>
  );
};

export default CVLayout;

CVLayout.propTypes = {
  layoutType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
