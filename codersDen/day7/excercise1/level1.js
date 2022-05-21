//Que1: Declare a function fullName and it print out your full name.

Ans:
    const fullNamee = () => {
        return `${lastname} ${firstname} ${middlename}`
    };
console.log(fullName('orji', 'chima', 'prince'))
    /*Que2: Declare a function fullName and now it takes firstName, 
    lastName as a parameter and it returns your full - name.*/

Ans:
    const fullName = (lastname = 'orji', firstname = 'chima', middlename = 'prince') =>
        `${lastname} ${firstname}, ${middlename}`
console.log(fullName());

//Que3: Declare a function addNumbers and it takes two two parameters and it returns sum.

Ans:
    function addNumbers(number1, number2) {
        return `${number1 + number2}`
    };
console.log(addNumbers(3, 4));

/* Que4: An area of a rectangle is calculated as follows: area = length x width. 
Write a function which calculates areaOfRectangle.*/

Ans:
    function areaOfRectangle(length, width) {
        let area = length * width
        return area
    };
console.log(areaOfRectangle(3, 6));

/*Que5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
Write a function which calculates perimeterOfRectangle.*/

Ans:
    const perimeterOfRectangle = (length, width) => {
        perimeter = 2 * (length + width)
        return perimeter
    }
console.log(perimeterOfRectangle(3, 5));

/*Que6:A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
Write a function which calculates volumeOfRectPrism.*/

Ans:
    const volumeOfRectPrism = (length, width, height) => {
        volume = length * width * height
        return volume
    }
console.log(volumeOfRectPrism(3, 5, 7));

/*Que7:Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle*/

function areaOfCircle(r, π = 3.142) {
    area = π * r * r
    return area
}
console.log(areaOfCircle(8));

/*Que8: Circumference of a circle is calculated as follows: circumference = 2πr. 
Write a function which calculates circumOfCircle*/

Ans:
    function circumOfCircle(r, π = 3.142) {
        circumference = 2 * (π * r)
        return circumference
    }
console.log(circumOfCircle(8));

/*Que 9:Density of a substance is calculated as follows:density= mass/volume. 
Write a function which calculates density.*/

Ans:
    const calculateDensity = (mass, volume) => {
        density = mass / volume
        return density
    }
console.log(calculateDensity(4.8, 7))

/*Que 10:Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
Write a function which calculates a speed of a moving object, speed.*/

Ans:
    const calculateSpeed = (function(distance, time) {
        speed = distance / time
        return `the total speed is speed${speed} N`
    })(30, 5)
console.log(speed)

//Que: 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

Ans:
    const calculatesWeight = (function(mass, gravity = 9.81) {
        weight = mass * gravity
        return weight
    })(92)
console.log(calculatesWeight)