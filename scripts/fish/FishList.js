/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish } from './FishDataProvider.js';
import { FishComponent } from './fishComponent.js';

export const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let fishHTMLRepresentation = "";
    for (const fish of fishes) {
        fishHTMLRepresentation += FishComponent(fish);
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}