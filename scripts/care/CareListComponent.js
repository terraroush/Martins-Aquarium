import { useCare } from "./CareDataProvider.js";
import { CareComponent } from "./CareComponent.js";

export const CareListComponent = () => {
  const contentElement = document.querySelector(".careTips");
  const cares = useCare();

  const HTMLStrings = cares.map((careObj) => {
    return CareComponent(careObj);
  });
  contentElement.innerHTML = HTMLStrings.join("");
};
