/*Que: First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13*/

Ans:
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textNew = text.replaceAll('.', '').replaceAll(',', '');
let textNewToArray = textNew.split(' ');
console.log(textNewToArray, );
console.log(textNewToArray.length);
console.log(`${textNewToArray},  '\n' ${textNewToArray.length}`);