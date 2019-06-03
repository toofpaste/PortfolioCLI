import Contagion from '../src/viral';
import City from '../src/city';
import World from '../src/world';
import {generateTownName} from '../src/world';

describe("City Tests", function () {

    test('City Constructor', () => {
        let portland = new City({
            name: "Portland",
            area: 147,
            waterCoverage: .6
        })
        expect(portland.name).toBe("Portland");
        expect(portland.area).toBe(147);
        expect(portland.waterCoverage).toBe(.6);
        expect(portland.population).toBe(1000000);
    });
});

describe("World Tests", function () {
    let world;


    beforeEach(() => {
        let portland = new City({
            name: "Portland",
            area: 147,
            waterCoverage: .6
        });
        let sanFran = new City({
            name: "San Fransisco",
            area: 254,
            waterCoverage: .7
        });
        let ebola = new Contagion({
            name: "Ebola",
            halfLife: 15,
            spread: "Airborn",
            catch: .25
        });
        world = new World({
            cities: [portland, sanFran],
            diseases: [ebola]
        });
    });

    test('World Constructor', () => {

        expect(world.cities[0].name).toBe("Portland");
        expect(world.cities[1].name).toBe("San Fransisco");
        expect(world.diseases[0].name).toBe("Ebola");
        
        
    });
    
    test('World Constructor Random Cities', () => {
        
        let newWorld = new World();
        expect(newWorld.cities.length >= 10).toBe(true);
        expect(typeof newWorld.cities[0]).toBe("object");
        expect(typeof newWorld.contagions[0]).toBe("object");
    });

    test('To Infect Random City', () => {
        
        let newWorld = new World();
        expect(newWorld.cities.filter( c => c.infected.length > 0).length).toBe(0);
        newWorld.infectCity();
        expect(newWorld.cities.filter( c => c.infected.length > 0).length).toBe(1);
    })

    test('Grow Infection in City', () => {
        
        let newWorld = new World();
        newWorld.infectCity();
        let infectedCity = newWorld.cities.filter( c => c.infected.length > 0)[0];
        
        expect(infectedCity.infected[0].infected).toBe(1);
        newWorld.advanceDay();
        expect(infectedCity.infected[0].infected).toBe(2);
        newWorld.advanceDay();
        expect(infectedCity.infected[0].infected).toBe(4);
    });

    test('Time Passage for Advancing the Day', () => {
        jest.useFakeTimers();

        let newWorld = new World();
        newWorld.infectCity();
        let infectedCity = newWorld.cities.filter( c => c.infected.length > 0)[0];
        expect(infectedCity.infected[0].infected).toBe(1);
        jest.advanceTimersByTime(1000);
        expect(infectedCity.infected[0].infected).toBe(2);
        jest.advanceTimersByTime(1000);
        expect(infectedCity.infected[0].infected).toBe(4);

    });

});


describe("Random Tests", function () {

    test('Create random name for towns', () => {
        let name = generateTownName();        
        expect(typeof name).toBe("string");
    });
});

describe("Contagion Tests", function () {

    test('Contagion Constructor', () => {
        let ebola = new Contagion({
            name: "Ebola",
            halfLife: 15,
            spread: "Airborn",
            catch: .25
        });
        expect(ebola.name).toBe("Ebola");
        expect(ebola.halfLife).toBe(15);
        expect(ebola.spread).toBe("Airborn");
        expect(ebola.catch).toBe(.25);
        expect(ebola.type).toBe("Viral");
    });
});