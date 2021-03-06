/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method*/
Ans:
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortt = ages.sort()
let valueMax = Math.max(...ages);
let valueMin = Math.min(...ages);
let rangeAges = valueMax - valueMin //the range of ages(max minus min)
console.log(`${sortt} \n ${valueMax} \n ${valueMin} \n ${rangeAges}`); //Sort the array and find the min and max and the range 
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let agesAverage = sum / ages.length;
console.log(agesAverage); // Finds the average age(all items divided by number of items
let minAverage = valueMin - agesAverage;
let maxAverage = valueMax - agesAverage;
let compareMinMaxAverage = Math.abs(minAverage) === Math.abs(maxAverage); //Compare the value of (min - average) and (max - average), use abs() method 
console.log(` The value is ${compareMinMaxAverage}`);
/*const numbers = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
function myFunc(a, b) {
    return (a + b)
}
console.log(numbers.reduce(myFunc) / numbers.length);*/ // alternatively using a function to Find the average age(all items divided by number of items


// let firsthalve = [];
// let secondhalve = [];
if (ages.length % 2 === 0) {
    firstEvenHalve = ages.splice(0, ages.length / 2 - 1);
    secondEvenHalve = ages.splice(ages.length / 2, ages.length);
    console.log(firstEvenHalve, secondEvenHalve);
} else {
    firstOddHalve = ages.splice(0, ages.length / 2);
    secondOddHalve = ages.splice(ages.lenght / 2 - 1, ages.length);
    console.log(firstOddHalve, secondOddHalve);
}
console.log(ages);

// const num = [1, 2, 3, 4, 5, 6, 7, 8]
// let numSort = num.sort()
// console.log(numSort);
// if (numSort.length % 2 === 0) {
//     firstEvenHalve = numSort.splice(0, numSort.length / 2 - 1)
//     secondEvenHalve = numSort.splice(numSort.length / 2, numSort.length);
//     console.log(firstEvenHalve, secondEvenHalve);
// } else {
//     firstOddHalve = numSort.splice(0, numSort.length / 2)
//     secondOddHalve = numSort.splice(numSort.length / 2 - 1, numSort.length);
//     console.log(firstOddHalve, secondOddHalve);
// }
// console.log(numSort);


const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
let sliceFirst10Country = countries.slice(0, 10);
console.log(sliceFirst10Country);

// Find the middle country(ies) in the countries array
if (countries.length % 2 == 0) {
    firstHalveEve = countries.splice(0, countries.length / 2 - 1)
    secondHalveEve = countries.splice(countries.length / 2, countries.length);
} else {
    console.log(Math.floor(countries.length / 2))
}
console.log(countries);



//   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25];
ages.sort()
if (ages.length % 2 === 0); {
    halvEven1 = ages.slice(0, ages.length / 2 - 1)
    halvEven2 = ages.slice(ages.length / 2 + 1, ages.length);
} else {
    halvOdd1 = ages.slice(0, Math.ceil(ages.length / 2))
    halvOdd2 = ages.slice(Math.ceil(ages.length / 2), ages.length))

}
console.log(ages);
console.log(halvEven1)
console.log(halvEven2)
console.log(ages)
console.log(ages.length / 2)
console.log(ages.charAt(4.5))