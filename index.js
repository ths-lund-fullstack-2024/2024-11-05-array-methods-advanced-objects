const country = {
  name: "Sweden",
  weather: "Ice cold",
  population: 1000,
  location: { long: 163489, lat: 124192739 },
};

Object.seal(country);

country.name = "Denmark"; // Works
country.colors = "Blue and yellow"; // Won't work.

console.log(Object.isSealed(country));
