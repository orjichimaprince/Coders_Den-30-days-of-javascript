/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 50*/
Ans:
    let usersBase = parseInt(prompt(`Enter Base`));
let usersHeight = parseInt(prompt(`Enter Height`));
const areaTriangle = (0.5 * usersHeight * usersBase);
console.log('area of triangle', +areaTriangle);


/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12*/
Ans:
    let sideA = parseInt(prompt(`Enter side a of the triangle`));
let sideB = parseInt(prompt(`Enter side b of the triangle`));
let sideC = parseInt(prompt(`Enter side c of the triangle`));
let perimeter = (sideA + sideB + sideC);
console.log(`this is the perimeter`, +perimeter);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

Ans:
    let usersLength = parseInt(prompt(`Enter Length`));
let usersWidth = parseInt(prompt(`Enter Width`));
const areaTrianglee = (2 * (usersLength + usersWidth) * usersLength * usersWidth);
console.log('area of triangle', +areaTrianglee);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

Ans:
    let pi = 3.14
let radiuss = parseInt(prompt(`Enter radius of circle here`));
let areaRadius = pi * radiuss * radiuss;
let circumfe = 2 * pi * radiuss;
console.log(`the radius area of the circle is ${areaRadius} and the circumference of the circle is ${circumfe}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
Ans:
    let interceptX =