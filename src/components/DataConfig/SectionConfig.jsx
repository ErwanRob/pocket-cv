import BaristaConfig from "./CVConfig/BaristaConfig";
import BaristaConfig2026 from "./CVConfig/BaristaConfig2026";
import GeneralConfig from "./CVConfig/GeneralConfig";
import FrontEndConfig from "./CVConfig/FrontEndConfig";

export const getSectionConfig = (cvType, data, layoutId) => {
  switch (cvType) {
    case "frontEnd":
      return FrontEndConfig(data, layoutId);
    case "barista":
      return BaristaConfig2026(data, layoutId);
    case "barista2026":
      return BaristaConfig(data, layoutId);
    case "general":
      return GeneralConfig(data, layoutId);
    default:
      // Fallback configuration (or I can throw an error)
      return {
        top: () => null,
        left: () => null,
        right: () => null,
        bottom: () => null,
      };
  }
};
