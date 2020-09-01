const locationCollection = [
  {
    locationName: "Madagascar",
    image: "-madagascar.jpg",
    imageAlt: "overhead view of tropical ocean",
    button: "+",
    quote:
      "There are two kinds of divers, divers who pee in their wetsuits and divers that don’t tell the truth",
  },
  {
    locationName: "Guam",
    image: "guam.jpg",
    imageAlt: "overhead view of tropical ocean",
    button: "+",
    quote:
      "Dear ocean. Thank you for making us feel tiny, humble, inspired, and salty…all at once",
  },
  {
    locationName: "Indonesia",
    image: "indonesia.jpg",
    imageAlt: "overhead view of tropical ocean",
    button: "+",
    quote: "Every time I slip into the ocean, it’s like going home",
  },
  {
    locationName: "Philippines",
    image: "philippines.jpg",
    imageAlt: "overhead view of tropical ocean",
    button: "+",
    quote:
      "Every time you dive, you hope you’ll see something new – some new species. Sometimes the ocean gives you a gift, sometimes it doesn’t",
  },
  {
    locationName: "Rarotonga",
    image: "rarotonga.jpg",
    imageAlt: "overhead view of tropical ocean",
    button: "+",
    quote: "Always be nice to a diver. We know places, where you will find you",
  },
  {
    locationName: "Southern Japan",
    image: "southern japan.jpg",
    imageAlt: "overhead view of tropical ocean",
    button: "+",
    quote:
      "I am a diver. This means my mind and heart are sometimes underwater. Thank you for your understanding",
  },
];

export const useLocations = () => {
  return locationCollection.slice();
};
