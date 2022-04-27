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

//Que: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

Ans:
    4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false
    // Que: Find the length of python and jargon and make a falsy comparison statement.

Ans:
    let coursse1 = `python`;
let coursse2 = `jargon`;
console.log(coursse1.length !== coursse2.length);


//Que: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
    !(4 > 3) //false
    !(4 < 3) //true
    !(false) //true
    !(4 > 3 && 10 < 12) //false
    !(4 > 3 && 10 > 12) //true
    !(4 === '4') //true
    //Que: There is no 'on' in both dragon and python
let animal1 = `dragon`;
let animal2 = `python`;
console.log(animal1.includes(`on`) !== animal1 && animal2.includes(`on`) != animal2);