import {GetRandom} from './world'

export default class Contagion {
    constructor(args) {
        //Viral, Bacterial, Parasitical
        this.type = "Viral";
        //Half Life in days
        this.halfLife = 30;
        //multipler for transmission
        this.growth = 1;
        this.name = args.nameId + generateVirusName();
        //Airborn, Waterborn, Both
        this.spread = "Waterborn";
        //how contagious it is
        this.fatality = .10;
        Object.assign(this, args);
    }



}


let prefix = ["Dolph", "Bruce", "Robert", "Mel", "Steven", "Jet", "Keanu"]
let suffix = ["Gibson", "Willis", "Chan", "Li", "Norris", "Lee", "Van Damme", "Seagal", "Ford"]
let middle = [" Von", "-Claude", ' "The Beast"', ' "Ice Man"', "-Nirros"]

export function generateVirusName() {
    let word = " ";
    word += prefix[GetRandom(0, prefix.length - 1)];    
    if (GetRandom(1, 5) === 5) {        
        word += middle[GetRandom(0, middle.length - 1)];
    }
    word += " ";
    word += suffix[GetRandom(0, suffix.length - 1)];   
    return word;
}