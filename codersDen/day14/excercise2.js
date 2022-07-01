// Override the method you create in Animal class
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs, eyes) {
        this.animalName = name
        this.animalAge = age
        this.animalColor = color
        this.animalLegs = ['2legs', '4legs', 'fills and gills']
        this.animalEyes = eyes
    }
    animalWantsToRun() {
        let movement = `${this.animalName} moves faster with ${this.animalLegs.slice(-2,2)} when there is a prey`
        return movement
    }
    animalWantsToSleep() {
        let sleeping = `${this.animalName, this.animalLegs} are heavy with ${this.animalEyes} deem `
    }
    animalHasATerritory() {
        return this.animalName;
    }
    animalmovement() {
        return `${this.animalName}'s back does not touch the face of the earth, he swiftly touches with the 
        ${this.animalLegs} in a fall`
    }
}
//   Create a Dog and Cat child class from the Animal Class.

// Ans: 
const Dog = new Animal('Dog', '24months', 'brown', '4limbs', 'green')
const cat = new Animal('Cat', '24months', 'spotted', 'limbs', 'brownish')
console.log(Dog.animalWantsToRun())
console.log(cat.animalmovement())

// Override the method you create in Animal class
class Bird extends Animal {
    constructor(name, age, color, legs, eyes, body, weight) {
        super(name, age, color, legs, eyes, body)
        this.animalWeight = weight
        this.animalHabitat = ['water', 'land', 'air']
        this.animalLegs = ['2legs', '4legs', 'fills and gills']
        this.animalAge = [10, 15, 20]
    }
    animalWantsToRun() {
        let movement = `${this.animalName} moves faster with ${this.animalLegs.slice(0,1)} while in the air when gaining altitude`
        return movement
    }
    legged2Animal() {
        // let animalLeg = this.animalLegs.slice(-3)
        return `${this.animalName} is 2legged`
    }
    legged4Animal() {
        return `${this.animalName} is a ${this.animalLegs.slice(-2)}`
    }
    get Agelives() {
        return this.animalAge.slice(1, 2).join()
    }

    legged0Animal() {
        return `${this.animalName} has ${this.animalLegs.slice(-1)},because its a fish and lives  ${this.animalHabitat.slice(0,1)}`
    }


}
const Eagle = new Bird('Eagle', '10yrs', 'brownish-purple', '2legs')
console.log(Eagle.legged0Animal())
console.log(Eagle.legged2Animal())
console.log(Eagle.animalWantsToRun()) //overiding happen here, which is different from the Anumal parent output
console.log(Eagle.Agelives)