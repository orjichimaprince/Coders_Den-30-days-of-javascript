//Que: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

Ans:
    let firstName = 'Prince';
let lastName = 'Orji';
let country = 'Nigeria';
let city = 'Keffi';
let age = 60;
let isMarried = false;
let year = 2015;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

//Que:  Check if type of '10' is equal to 10

Ans:
    let nnum = '10';
console.log(typeof nnum === 10);

//Que: Check if parseInt('9.8') is equal to 10

Ans:
    let gravity = '9.8';
let gravityNew = parseInt(gravity);
console.log(gravityNew === 10);

/* Que: Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/

Ans:
    // truthy value
    let nigeria = 'country';
let range = -3;
let counts = 20;

// falsy value
let initialVelocity = 0;
let inputation = ``;
let caliberation = null;


/* use this code to validate the truthy and falsy state of code above
if(variable){
        console.log(`this is a truthy value`)
}else{
        console.log(`this is a falsy value`)
}
*/