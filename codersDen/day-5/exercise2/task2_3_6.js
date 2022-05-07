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

/*Que: In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

Ans:
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat'); //adds meat in the beginning of the array.
shoppingCart.unshift('meat')
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.length - 2, 1);
console.log(shoppingCart);


/*Que:Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]*/

Ans:
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd);
console.log(fullStack);