import City from "./city";

export default class World {
    constructor(args){        
        
        this.cities = [];
        if (!args || !('cities' in args)) {
            let cityCount = GetRandom(10, 16)
            for (let i = 1; i < cityCount; i++) {
                this.cities.push(new City({
                    population: GetRandom(5, 2500) * 1000,
                    name: generateTownName(),
                    area: GetRandom(50, 300),
                    waterCoverage: GetRandom(0, 100) / 100,
                    lat: GetRandom(0, 359),
                    lon: GetRandom(0, 359)
                }));
            }

        }
        this.diseases = [];
        this.date = new Date("Jan 1 2020");
        Object.assign(this, args);
    }
}


let prefix = ["San ", "Por", "Los ", "North ", "Spring", "New ", "West ", "Rich", "Bos", "York", "Cal", "Wash"]
let suffix = ["antonita", "land", "ton", "ville", "mond", "side", "ington", "field"]

export function generateTownName() {
    let word = "";
    word += prefix[GetRandom(0, prefix.length - 1)];
    word += suffix[GetRandom(0, suffix.length - 1)];
    if (GetRandom(1, 5) === 5) {
        word += suffix[GetRandom(0, suffix.length - 1)];
    }
    return word;
}


function GetRandom(min, max) {
    return min + Math.floor(Math.random() * Math.floor((max + 1) - min));
}