const { filter } = require("vue/types/umd");

/*Que:Find a union b*/
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const newA = new Set(a);
const newB = new Set(b);
const newC = [...a, ...b]
const newCountries = new Set(countries);

console.log(newC);

/*Que:Find a intersection b*/
let intercessions = a.filter((cv) => newB.has(cv))
console.log(intercessions)

/*Que: Find a with b*/
let differencee = a.filter((cv) => !newB.has(cv))
console.log(differencee)