/*Ans:create an empty set*/
Ans:

    const emptySet = new Set();
console.log(emptySet)

/*Create a set containing 0 to 10 using loop*/
const resturants = ['concor-hotel', 'prestige', 'minki-suit', 'hotelier', 'daVinci', 'concor-hotel'];
const modernResturants = new Set(resturants)
for (const hotels of resturants) {

}
console.log(modernResturants)

/*Remove an element from a set*/
const removeElement = modernResturants.delete('prestige')

/*Clear a set*/
resturants.clear()
console.log(resturants)


/*Create a set containing 0 to 10 using loop*/
const resturantss = ['concor-hotel', 'prestige', 'minki-suit', 'hotelier', 'daVinci', 'concor-hotel'];
const moddernResturants = new Set(resturants)
for (const hotels of resturants) {

}
console.log(resturantss)

/*Create a map of countries and number of characters of a country*/
countries = [
    ['nigeria', 'abuja'],
    ['Ghana', 'accra'],
    ['usa', 'new-york']
]
const mapCountries = new Map(countries)
console.log(mapCountries, mapCountries.size)