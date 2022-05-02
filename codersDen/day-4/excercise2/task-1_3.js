/*Que: Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

Ans:
    // to revisit
    let studentGrade = prompt(`Enter grade`);
let studentGradeCheck = parseInt(studentGrade);
// let grade = 0
// for (i=0; i<=100; i++) {
//  grade += studentGrade[i]
if (studentGradeCheck => 80 && studentGradeCheck <= 100) {
    console.log(`A`)
} else if (studentGradeCheck => 70 && studentGradeCheck >= 89) {
    console.log(`B`)
} else if (studentGradeCheck => 60 && studentGradeCheck >= 69) {
    console.log(`C`)
} else if (studentGradeCheck => 50 && studentGradeCheck >= 59) {
    console.log(`D`)
} else if (studentGradeCheck => 0 && studentGradeCheck >= 49) {
    console.log(`D`)
} else {
    console.log(`input not valid`)
}
// }

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let season = {
    Winter: ['december', 'january', 'february'],
    Autumn: ['september', 'october', 'november'],
    Spring: ['march', 'april', 'may'],
    Summer: ['june', 'july', 'august'],
};
let userSeason = prompt(`what month is it?`).toLowerCase();
if (userSeason === season.Winter[0] || userSeason === season.Winter[1] || userSeason === season.Winter[2]) {
    console.log(`the season is Winter`);
} else if (userSeason === season.Autumn[0] || userSeason === season.Autumn[1] || userSeason === season.Autumn[2]) {
    console.log(`the season is Autumn`);
} else if (userSeason === season.Spring[0] || userSeason === season.Spring[1] || userSeason === season.Spring[2]) {
    console.log(`the season is Spring`)
} else if (userSeason === season.Summer[0] || userSeason === season.Summer[1] || userSeason === season.Summer[2]) {
    console.log(`the season is Summer`);
} else {
    console.log(`invalid input`);
}
