export const LocationComponent = (locationObj) => {
    return `
    <div class="locationCard__picBox">
        <h4 class="location__name">${locationObj.locationName}</h4>
    <img src="images/${locationObj.image}" alt="${locationObj.imageAlt}" class="locationCard__pic">
    </div>                     
    <button class="tipsButton">${locationObj.button}</button>                
    <quote class=hiddenTips">"${locationObj.quote}"</quote>                            
    `
}    
     