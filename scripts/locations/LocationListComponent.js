import { useLocations } from './LocationDataProvider.js'
import { LocationComponent } from './LocationComponent.js';

// this function: defines a variable that accesses the place in the dom where you want to put your location components; calls a function that gives us an array that holds a  copy of our location objects; creates an empty string for our trasformed objects; iterates over the location objects, and adds the location objects, one by one to the empty string; finally with dot notation and innerHTML, we transform the objects into strings with template literals, to be displayed on the dom. 

export const LocationListComponent = () => {

    const contentElement = document.querySelector(".locationCard");

    const locations = useLocations();

    let locationHTMLRepresentation = "";
    for (const location of locations) {
        locationHTMLRepresentation += LocationComponent(location);
    }

    contentElement.innerHTML += `
        ${locationHTMLRepresentation}
    `
}