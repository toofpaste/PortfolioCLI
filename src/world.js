import City from "./city";
import Contagion from "./viral";

export default class World {
    constructor(args) {

        this.cities = [];
        this.contagions = [];
        
        if (!args || !('cities' in args)) {
            let cityCount = GetRandom(10, 16)
            for (let i = 1; i <= cityCount; i++) {
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
        if (!args || !('contagions' in args)) {
            let contagionCount = GetRandom(2, 4)
            for (let i = 1; i < contagionCount; i++) {
                this.contagions.push(new Contagion({
                    type: contagionTypes[GetRandom(0, 2)],
                    halfLife: GetRandom(5, 120),
                    name: `Contagion ${i}`
                }));
            }

        }

        this.date = new Date("Jan 1 2020");
        Object.assign(this, args);
        setInterval(() => this.advanceDay(), 1000);
    }

    

    infectCity() {
        let city = this.cities[GetRandom(0, this.cities.length - 1)];
        let contagion = this.contagions[GetRandom(0, this.contagions.length - 1)];

        if (city.infected.filter(i => i.name === contagion.name).length === 0){
            city.infected.push({name: contagion.name, infected: 1})
        }
        
    }

    advanceDay() {        
        for (let c = 0; c < this.cities.length; c++) {
            let city = this.cities[c];
            for (let i = 0; i < city.infected.length; i++) {
                let infection = city.infected[i];                
                infection.infected *= 2;
            }
        }
    }

}


let prefix = ["San ", "Por", "Los ", "North ", "Spring", "New ", "West ", "Rich", "Bos", "York", "Cal", "Wash"]
let suffix = ["antonita", "land", "ton", "ville", "mond", "side", "ington", "field"]

let contagionTypes = ["Viral", "Bacterial", "Parasitical"]

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