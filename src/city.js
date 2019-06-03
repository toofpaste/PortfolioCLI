
export default class City {
    constructor(args) {
        this.population = 1000000;
        this.name = "Noplace";
        //area in sq miles
        this.area = 150;
        this.waterCoverage = .3;
        this.connections = {};
        this.lat = 0;
        this.long = 0;
        this.infected = [];        
        Object.assign(this, args);
    }

    getInfection(name) {
        return this.infected.filter( i => i.name === name)[0].infected
    }

}


