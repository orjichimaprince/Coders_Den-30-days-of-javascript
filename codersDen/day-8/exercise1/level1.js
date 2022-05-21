// Create an empty object called dog
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
    name: 'puppy',
    legs: 'long',
    age: '3years',
    bark: 'woof woof'
};
console.log(dog);
// Get name, legs, color, age and bark value from the dog object
console.log(dog['name'], dog['legs'], dog['age'], dog['bark']);
// Set new properties the dog object: breed, getDogInfo
dog['breed'] = 'caucasian'
dog['getDogInfo'] = Object.entries(dog);
console.log(dog);