import React from "react";
import Portrait from "../../Items/Portrait/Portrait.jsx";
import ItemsList from "../../Items/ItemsList/ItemsList.jsx";
import TextBlock from "../../Items/TextBlock/TextBlock.jsx";
import PropTypes from "prop-types";

const FrontEndConfig = (data, layoutId) => {
  return {
    top: () => null,
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
          source={data.TBL.Experiences.items[1]}
          layoutId={layoutId}
        />
        <TextBlock source={data.TBL.Experiences.items[0]} layoutId={layoutId} />
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
    bottom: () => null,
  };
};

FrontEndConfig.propTypes = {
  layoutId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default FrontEndConfig;
