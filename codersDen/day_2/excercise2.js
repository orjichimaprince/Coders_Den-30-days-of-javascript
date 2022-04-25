// print out the quote using console.log()  The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Ans:
    let quoteJohn = `There is no exercise better for the heart than reaching down and lifting people up.`
console.log(quoteJohn);

//Que:print out the quote using console.log() "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Ans:
    let quoteTheresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quoteTheresa);

//Que: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
Ans:
    let numb = 10;
let numb2 = '10';
let numComparison = typeof numb == typeof numb2;
console.log(numComparison);

//Que: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
Ans:
    var parseFloat = `9.8`;
var parseFloat = parseInt(parseFloat);
console.log(Math.round(parseFloat + 1));

//Que: Check if 'on' is found in both python and jargon
Ans:
    let course1 = `python`;
let course2 = `jargon`;
let bothCourses = course1 + course2;
console.log(bothCourses);
console.log(bothCourses.includes(`on`));

//Que: I hope this course is not full of jargon. Check if jargon is in the sentence.
Ans:
    let question = 'I hope this course is not full of jargon';
console.log(question.includes(`jargon`));

//Que: Generate a random number between 0 and 100 inclusively.
Ans:
    let numRand = Math.random()
let numMax = 100 * numRand;
console.log(numMax);
let numMax2 = Math.ceil(numMax)
console.log(numMax2);

//Que: Generate a random number between 0 and 255 inclusively.
Ans:
    let numMaxs = 254 * Math.random();
console.log(numMaxs);
let numMaxs2 = Math.ceil(numMaxs2);
console.log(numMaxs2);

// Access the 'JavaScript' string characters using a random number.
Ans:
    var frontEnd = `JavaScript`;
var frontEndOutput = frontEnd[Math.floor(Math.random() * frontEnd.length)]
console.log(frontEndOutput);


//Que: Use console.log() and escape characters to print the following pattern.
/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

// var num0 = [1,1,1,1,1,];
// var num1 = [2,1,2,4,8];
// var num3 = [3,1,3,9,27];
// var num4 = [4,1,4,16,62];
// var num5 = [5,1,5,25,125];
Ans:
    console.log(' 1\t1\t1\t1\t1 \n 2\t1\t2\t4\t8 \n 3\t1\t3\t9\t27 \n 4\t1\t4\t16\t64 \n 5\t1\t5\t25\t125')

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
var phrase = `You cannot end a sentence with because because because is a conjunction`
console.log(phrase.substr(phrase.indexOf('because'), 24));

// Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// to revist 
var feeling = `Love is the best thing in this world. Some found their love and some are still looking for their love.`
console.log(feeling.repeat(`love`));

//  Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var phrase = `You cannot end a sentence with because because because is a conjunction`
console.log(phrase.match(`because`));

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// to revisit
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    // var sents = sentence.replace('%','');
console.log(sentence.replace('@', ''));
console.log(sentence.replace('&', ''));
console.log(sentence.replace('#', ''));
console.log(sentence.replace('%', ''));

/* Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'*/
Ans:
    var salary = 5000;
var BonusAnnual = 10000;
var coursesOnline = 15000;
var totalAnnual = salary + BonusAnnual + coursesOnline;
console.log(totalAnnual);