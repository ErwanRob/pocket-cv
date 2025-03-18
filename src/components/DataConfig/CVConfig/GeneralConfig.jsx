import React from "react";
import HeadBand from "../../Items/HeadBand/HeadBand.jsx";
import Portrait from "../../Items/Portrait/Portrait.jsx";
import ItemsList from "../../Items/ItemsList/ItemsList.jsx";
import TextBlock from "../../Items/TextBlock/TextBlock.jsx";
import PropTypes from "prop-types";

const GeneralConfig = (data, layoutId) => {
  return {
    top: () => <HeadBand title="EMPLOYE POLYVALENT" />,
    left: () => (
      <>
        <TextBlock
          source={data.TBL.Profil.items[0]}
          center={true}
          layoutId={layoutId}
          customStyle={{
            padding: "0.25rem 0.75rem 0.25rem 1.5rem",
          }}
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
          source={data.TBL.Experiences.items[5]}
          layoutId={layoutId}
        />
        <TextBlock source={data.TBL.Experiences.items[4]} layoutId={layoutId} />
        <TextBlock source={data.TBL.Experiences.items[2]} layoutId={layoutId} />
        <TextBlock source={data.TBL.Experiences.items[1]} layoutId={layoutId} />
        <TextBlock source={data.TBL.Experiences.items[0]} layoutId={layoutId} />
        <TextBlock
          blockTitle={data.TBL.Studies.blockTitle}
          source={data.TBL.Studies.items[2]}
          layoutId={layoutId}
        />
        <TextBlock source={data.TBL.Studies.items[1]} layoutId={layoutId} />
        <TextBlock source={data.TBL.Studies.items[0]} layoutId={layoutId} />
      </>
    ),
    bottom: () => null,
  };
};

GeneralConfig.propTypes = {
  layoutId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default GeneralConfig;
