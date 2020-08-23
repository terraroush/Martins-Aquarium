import { useFishObjArr, makeMostHolyFish, makeSoldierFish, makeUnworthyFish } from './FishDataProvider.js';
import { FishComponent } from './fishComponent.js';

// This function combines with addFishToDom. This one defines variables that refer to the objects in an array so that we can transform the object data into strig data to put into the dom.

export const FishListComponent = () => {
    // const fishes = useFishObjArr();
    const holiestArr = makeMostHolyFish();
    addFishToDom(holiestArr);
    const soldiersArr = makeSoldierFish();
    addFishToDom(soldiersArr);
    const unworthyArr = makeUnworthyFish();
    addFishToDom(unworthyArr);
}   

// this function accepts an array. aFishArr acts a a placeholder for whatever array will be used. inside this function: it defines a variable that accesses the place in the dom where you want to put your fish components; iterates over the fish objects from a fish array, and adds the fish objects, one by one to the empty string; finally with dot notation and innerHTML, we transform the objects into strings with template literals, to be displayed on the dom. 

const addFishToDom = (aFishArr) => {
    const contentElement = document.querySelector(".fishList");

    let fishHTMLRepresentation = "";
    for (const fishObj of aFishArr) {
        fishHTMLRepresentation += FishComponent(fishObj);
    }
     // Add to the existing HTML by using dot natation on contentElement
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}
    
