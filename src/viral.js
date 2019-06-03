export default class Contagion {
    constructor(args) {
        //Viral, Bacterial, Parasitical
        this.type = "Viral";
        //Half Life in days
        this.halfLife = 30;
        //multipler for transmission
        this.growth = 2;
        this.name = "Unknown";
        //Airborn, Waterborn, Both
        this.spread = "Waterborn";
        //how contagious it is
        this.catch = .50;
        Object.assign(this, args);
    }



}