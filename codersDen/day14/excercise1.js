// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs, eyes) {
        this.animalName = name
        this.animalAge = age
        this.animalColor = color
        this.animalLegs = legs
        this.animalEyes = eyes
    }
    animalWantsToRun() {
        let movement = `${this.animalName} moves faster with ${this.animalLegs} when there is a prey`
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