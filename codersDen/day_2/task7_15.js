let challenge = `30 Days Of JavaScript`;

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Ans:
    console.log(challenge.substring(3, 21));
console.log(challeng.substr(3, 18));

//Que: Check if the string contains a word Script using includes() method
Ans:
    console.log(challenge.includes(`Script`));

// Que: Split the string into an array using split() method
Ans:
    console.log(challenge.split())

// Que: Split the string 30 Days Of JavaScript at the space using split() method
Ans:
    console.log(challenge.split(''));

//Que: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Ans:
    var tech = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;
console.log(tech.split(`,`));

//Que: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
Ans:
    var courseDuration = '30 Days Of JavaScript'
var newCourse = courseDuration.replace('JavaScript', 'python')
console.log(newCourse);

// Que: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Ans:
    var courseDuration = '30 Days Of JavaScript'
var courseDurations = courseDuration.indexOf('a');
// console.log(courseDuration.indexOf('a'));
console.log(courseDurations);

// Que: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
Ans:
    var courseDuration = '30 Days Of JavaScript';
console.log(courseDuration.charAt(15));

//Que: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Ans:
    var courseDuration = '30 Days Of JavaScript';
console.log(courseDuration.charCodeAt('j'));