import { useFishObjArr, makeMostHolyFish, makeSoldierFish, makeUnworthyFish } from './FishDataProvider.js';
import { FishComponent } from './fishComponent.js';

// this function: defines a variable that accesses the place in the dom where you want to put your fish components; calls a function that gives us an array that holds a  copy of our fish objects; creates an empty string for our trasformed objects; iterates over the location objects, and adds the fish objects, one by one to the empty string; finally with dot notation and innerHTML, we transform the objects into strings with template literals, to be displayed on the dom. 

export const FishListComponent = () => {
    // const fishes = useFishObjArr();
    const holiest = makeMostHolyFish();
    addFishToDom(holiest);
    const soldiers = makeSoldierFish();
    addFishToDom(soldiers);
    const unworthy = makeUnworthyFish();
    addFishToDom(unworthy);
}   
 
const addFishToDom = (whichFishArray) => {

    const contentElement = document.querySelector(".fishList");

    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of whichFishArray) {
        fishHTMLRepresentation += FishComponent(oneThingFromTheSea);
    }
     // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}
    
