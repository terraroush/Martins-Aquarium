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

export const useFish = () => {
    return fishCollection.slice()
}