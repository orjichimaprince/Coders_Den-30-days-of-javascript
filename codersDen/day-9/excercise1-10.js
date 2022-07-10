/*Explain the difference between forEach, map, filter, and reduce.*/
// Ans: 

/*Define a call function before you them in forEach, map, filter or reduce.*/

const calculateAverage = (element1, element2) => {
    let putam = 0;
    for (const key in element1) {
        putam += element1[key] / element1.length
    }
    return putam
}
console.log(calculateAverage([2, 2, 3, 4]))

let put = [];
let sumAverage = [8, 3, 4, 5]
sumAverage.forEach((element) => put.push(calculateAverage(sumAverage) * element)) //using forEach
console.log(put)

let fixin = sumAverage.map((element) => calculateAverage(sumAverage) * element) // using map
console.log(fixin)

let fixout = []; //using filter
sumAverage.filter((element) => {
    return fixout.push(calculateAverage(sumAverage) * element)
})
console.log(fixout)

let fixMiddle = []
sumAverage.map((acc, cv, index) => {
    return fixMiddle.push(calculateAverage(sumAverage) * acc)
})
console.log(fixMiddle)

// let put = [];
// let sumAverage = [8, 3, 4, 5]
// sumAverage.forEach(function(element) {
//         let elementConvert = [element]
//         console.log(elementConvert)
//         let put1 = calculateAverage(sumAverage) * element
//         console.log(calculateAverage(sumAverage))
//         console.log(element)
//         console.log(put1)
//         return put = put1
//     }

// )
// console.log(put)


/*Use forEach to console.log each country in the countries array.*/
let newCountries = []
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(function(CountryElement) {
    return newCountries.push(CountryElement)
})
console.log(newCountries)

/*Use forEach to console.log each name in the names array.*/
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let newNames = []
names.forEach(name => { newNames.push(name) })
console.log(newNames)

/*Use map to create a new array by changing each country to uppercase in the countries array.*/
let countryUppercase = []
countries.map(finder => { countryUppercase.push(finder.toUpperCase()) })
console.log(countryUppercase)

/*Use map to create an array of countries length from countries array.*/
let countriesLength = countries.map(finder => finder.length)
console.log(countriesLength)

/*Use map to create a new array by changing each number to square in the numbers array*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numberSquare = numbers.map(finder => finder ** 2)
console.log(numberSquare)

/*Use map to change to each name to uppercase in the names array*/
let namesUppercase = names.map(name => name.toUpperCase())
console.log(namesUppercase)


/*Use map to map the products array to its corresponding prices.*/
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

products.map((element, index) => {
    // console.log(element)
    // console.log(index)
    console.log(Object.values(element))
    console.log(Object.entries(element))
    console.log(Object.keys(element))
})