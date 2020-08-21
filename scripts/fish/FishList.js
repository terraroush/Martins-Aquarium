import { useFish } from './FishDataProvider.js';
import { FishComponent } from './fishComponent.js';

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