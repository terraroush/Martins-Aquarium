import { useCare } from './CareDataProvider.js';
import { CareComponent } from './CareComponent.js'

export const CareListComponent = () => {

    const contentElement = document.querySelector(".careTips");
    const cares = useCare();

    let careHTMLRepresentation = "";
    for (const care of cares) {
        careHTMLRepresentation += CareComponent(care);
    }

    contentElement.innerHTML += `
        ${careHTMLRepresentation}
    `

}