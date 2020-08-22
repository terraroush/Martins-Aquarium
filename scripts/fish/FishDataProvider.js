// This file defines an array of fish objects. It also defines functions for using all or just certain objects within the collection.

const fishCollection = [
 
    {
        image: "bartfish.gif",
        imageAlt: "yellow Simpson's character Bart as a fish",
        name: "Bart",
        species: "Bartfish",
        lengthInCM: 20,
        harvestedFrom: "Springfield",
        diet: "butterfinger"
    },
    {
        image: "conlins angelfish.jpg",
        imageAlt: "blue and yellow fish",
        name: "Sam",
        species: "Colin's Angelfish",
        lengthInCM: 8,
        harvestedFrom: "Philippines",
        diet: "Spirulina, marine algae, mysis or frozen shrimp"
    },
    {
        image: "gem tang.jpg",
        imageAlt: "small black fish",
        name: "Gandolf",
        species: "Gem Tang",
        lengthInCM: 21,
        harvestedFrom: "Madagascar",
        diet: "marine-based seaweed and algae"
    },
    {
        image: "wrough iron butterfly fish.jpg",
        imageAlt: "shiny black and white fish",
        name: "Frodo",
        species: "Wrought Iron Butterflyfish",
        lengthInCM: 15,
        harvestedFrom: "Southern Japan",
        diet: "Microalgea, Zooplankton, Small crustaceans"
    },
    {
        image: "pepp.jpg",
        imageAlt: "red and white striped fish",
        name: "Pippen",
        species: "Peppermint Angelfish",
        lengthInCM: 7,
        harvestedFrom: "Rarotonga",
        diet: "copepods and amphipods"
    },
    {
        image: "pipefish-1.jpg",
        imageAlt: "yellow striped long skinny fish",
        name: "Gollum",
        species: "Yellow Multi-Banded Pipefish",
        lengthInCM: 12,
        harvestedFrom: "Indonesia",
        diet: "live copepods, vitamin-enriched live baby brine shrimp"
    },
    {
        image: "fingered dragonet.jpg",
        imageAlt: "dragon-like fish",
        name: "Smaug",
        species: "Dactylopus dactylopus",
        lengthInCM: 30,
        harvestedFrom: "Guam",
        diet: "Zooplankton, small crustaceans, shrimp"
    }
    
]
// This function creates a copy of the array with all fish objects*********ask: is this an array? I need clarification
export const useFishObjArr = () => {
    return fishCollection.slice()
}
// This function iterates all the fish objects, and chooses ones with a property value divisable by 3, and pushes them into a new array.
export const makeMostHolyFish = () => {

    const mostHolyFishArr = [];
    for(const fishObj of fishCollection) {
        if(fishObj.lengthInCM % 3 === 0) {
            mostHolyFishArr.push(fishObj);
        }
    }
    return mostHolyFishArr;
}
// This function iterates all the fish objects, and chooses ones with a property value divisable by 5, and pushes them into a new array.
export const makeSoldierFish = () => {

    const soldierFishArr = [];
    for(const fishObj of fishCollection) {
        if(fishObj.lengthInCM % 5 === 0 && fishObj.lengthInCM % 3 !== 0) {
            soldierFishArr.push(fishObj);
        }
    }
    return soldierFishArr
}
// This function iterates all the fish objects, and chooses ones with a property value neither divisable by 3 nor 5, and pushes them into a new array.
export const makeUnworthyFish = () => {

    const unworthyFishArr = [];
    for(const fishObj of fishCollection) {
        if(fishObj.lengthInCM % 3 !== 0 && fishObj.lengthInCM % 5 !== 0) {
            unworthyFishArr.push(fishObj)
        }
    }
    return unworthyFishArr;
}
