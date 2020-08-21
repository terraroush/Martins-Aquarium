import { useFish } from './FishDataProvider.js';
import { FishComponent } from './fishComponent.js';

// this function: defines a variable that accesses the place in the dom where you want to put your fish components; calls a function that gives us an array that holds a  copy of our fish objects; creates an empty string for our trasformed objects; iterates over the location objects, and adds the fish objects, one by one to the empty string; finally with dot notation and innerHTML, we transform the objects into strings with template literals, to be displayed on the dom. 

export const FishListComponent = () => {

    const contentElement = document.querySelector(".fishList");

    const fishes = useFish();

    let fishHTMLRepresentation = "";
    for (const fish of fishes) {
        fishHTMLRepresentation += FishComponent(fish);
    }
 
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}