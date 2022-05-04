/*Write a program which tells the number of days in a month.
    Enter a month: January
    January has 31 days.
  
    Enter a month: JANUARY
    January has 31 day
  
    Enter a month: February
    February has 28 days.
  
    Enter a month: FEbruary
    February has 28 days.*/


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

// 👇️ Current Month
// const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
// console.log(daysInCurrentMonth);

// 👇️ Other Months
// const daysInJanuary = getDaysInMonth(2027, 2);
// console.log(daysInJanuary); // 👉️ 31

// const daysInSeptember = getDaysInMonth(2024, 2);
// console.log(daysInSeptember); // 👉️ 30

// let monthDaysNo = prompt(`Enter Month`).toLowerCase();
// let month = monthDaysNo;
// let year = new Date().getFullYear();
// let computeDaysNo = new Date(year, month, 0).getDate();
// console.log(`${monthDaysNo} has ${computeDaysNo}`);


let monthsDaysNo = prompt(`Enter Month`).toLowerCase();
let month = [january, february, march, april, may, june, july, august, september, october, november, december] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let year = new Date().getFullYear();
let result = monthsDaysNo
let computeDaysNo = new Date(year, result, 0).getDate();
if (monthsDaysNo == january || february || march || april || may || june || july || august || september || october || november || december) {
    console.log(`${monthsDaysNo} has ${computeDaysNo}`);
} else {
    console.log(`invalid input`)
};

// alternative way to solve this but not efficient as it does not consider leap year output in february
// let yearr = new Date().getFullYear();
// let monthsNumber = [1,2,3,4,5,6,7,8,9,10,11,12];
// let computeDaysNo = new Date(yearr, results, 0).getDate();
// let results = monthsNumber;
let months = {
    january: [31, 'january', 1],
    february: [28, `february`],
    march: [31, `march`],
    april: [30, `april`],
    may: [31, `may`],
    june: [30, `june`],
    july: [31, `july`],
    august: [31, `august`],
    september: [30, `september`],
    october: [31, `october`],
    november: [30, `november`],
    december: [31, `december`],
}

// let monn = `january`;
// let MonthsConverted = Months.toArray();
let entryMonths = prompt(`Enter month`).toLowerCase();
switch (entryMonths) {
    case entryMonths = months.january[1]:
        console.log(`january has ${months.january[0]} day`);
        break;
    case entryMonths = months.february[1]:
        console.log(`february has ${months.february[0]} days`);
        break;
    case entryMonths = months.march[1]:
        console.log(`march has ${months.march[0]} days`);
        break;
    case entryMonths = months.april[1]:
        console.log(`april has ${months.april[0]} days`);
    case entryMonths = months.may[1]:
        break;
        console.log(`may has ${months.may[0]} days`);
        break;
    case entryMonths = months.june[1]:
        console.log(`june has ${months.june[0]} day`);
        break;
    case entryMonths = months.july[1]:
        console.log(`july has ${months.july[0]} days`);
        break;
    case entryMonths = months.august[1]:
        console.log(`august has ${months.august[0]} days`);
        break;
    case entryMonths = months.september[1]:
        console.log(`september has ${months.september[0]} days`);
        break;
    case entryMonths = months.october[1]:
        console.log(`october has ${months.october[0]} days`);
        break;
    case entryMonths = months.november[1]:
        console.log(`november has ${months.november[0]} days`);
        break;
    case entryMonths = months.december[1]:
        console.log(`december has ${months.december[0]} days`);
        break;
    default:
        console.log(`invalid input`)

};