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
    // let interceptX =
    // will come back to que 4-8


/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of yours you live: 100
You lived 3153600000 seconds.*/

 //extract year from date      
    // var year = month_diff.getFullYear();  
      
    var dob = new Date("06/24/2008");  
    var yr = new Date();
    //calculate month difference from current date in time  
    var month_diff = yr.getFullYear() - dob.getFullYear();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    // var year = month_diff.getFullYear();  
      
    //now calculate the age of the user  
    // var age = Math.abs(month_diff - 1970);  
// console.log(age);
console.log(month_diff);
// console.log(age_dt);



var workPlace = prompt('Enter workplace');
(workPlace = 'Uba') ? console.log(`i am going to keffi`):
(workPlace = 'access') ? console.log(`i will go to lafia`):
(workPlace = 'Zenith') ? console.log(`i will head towards asokoro`):
console.log(`i am staying home`);