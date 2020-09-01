import {
  useFishObjArr,
  makeMostHolyFish,
  makeSoldierFish,
  makeUnworthyFish,
} from "./FishDataProvider.js";
import { FishComponent } from "./fishComponent.js";

// This function combines with addFishToDom. This one defines variables that refer to the objects in an array so that we can transform the object data into strig data to put into the dom.

export const FishListComponent = () => {
  // const fishes = useFishObjArr();
  const holiestArr = makeMostHolyFish();
  addFishToDom(holiestArr);
  const soldiersArr = makeSoldierFish();
  addFishToDom(soldiersArr);
  const unworthyArr = makeUnworthyFish();
  addFishToDom(unworthyArr);
};

// This function takes a fish array as parameter; it targets the dom; it maps an array of fish objects and by way of the fishComponent function, turns any given fish objects into HTML strings; those strings are stored/returned in a variable, then added in turn with the .join() method and added to the dom.

const addFishToDom = (aFishArr) => {
  const contentElement = document.querySelector(".fishList");
  const HTMLStrings = aFishArr.map((fishObj) => {
    return FishComponent(fishObj);
  });
  contentElement.innerHTML += HTMLStrings.join("");
};
