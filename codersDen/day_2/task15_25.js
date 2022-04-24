//Que: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Ans:
    var courseDuration = '30 Days Of JavaScript'
console.log(courseDuration.lastIndexOf('a'));

//Que: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Ans:
    var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Que: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Ans:
    var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.lastIndexOf('because'));

//Que: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Ans:
    var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.search('because'));

//Que: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Ans:
    var courseDuration = '30 Days Of JavaScript'
console.log(courseDuration);
console.log(courseDuration.trim());

// Que: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
var courseDuration = '30 Days Of JavaScript';
console.log(courseDuration.startsWith('30 Days Of JavaScript'))

// Que:use endsWith() method with the string 30 Days Of JavaScript and make the result true
var courseDuration = '30 Days Of JavaScript';
console.log(courseDuration.endsWith('30 Days Of JavaScript'))

//Que: Use match() method to find all the a’s in 30 Days Of JavaScript
Ans:
    var courseDuration = '30 Days Of JavaScript';
console.log(courseDuration.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Ans:
    var courseDuration = '30 Days Of';
console.log(courseDuration.concat(' javaScript'));

// Use repeat() method to print 30 Days Of JavaScript 2 times
Ans:
    var courseDuration = '30 Days Of JavaScript';
console.log(courseDuration.repeat(2));