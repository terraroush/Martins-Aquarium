// This function turns any given fish object into a string

export const FishComponent = (fishObj) => {
  return `
        <div class="fishCard">
         <h4 class="fish__name">${fishObj.species}</h4>
        <div class="fishCard__picBox">
            <img src="images/${fishObj.image}" alt="${fishObj.imageAlt}" class="fishCard__pic">
        </div>
        <div class="fishCard__listBox">
            <ul>
                <li>Pet Name: ${fishObj.name}</li>
                <li>Species: ${fishObj.species}</li>
                <li>Maximum Length(cm): ${fishObj.lengthInCM}</li>
                <li>Harvested from: ${fishObj.harvestedFrom}</li>
                <li>Diet: ${fishObj.diet}</li>
            </ul>
        </div>
    </div>  
    `;
};
