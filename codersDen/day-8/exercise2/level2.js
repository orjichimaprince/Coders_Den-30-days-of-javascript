const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//Que4: Set your name in the users object without modifying the original users object

Ans:
    users.Prince = {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScrsipt'],
        age: 25,
        isLoggedIn: true,
        points: 57
    }

//Que5 Get all keys or properties of users object

Ans:
    const allKeys = Object.keys(users)
console.log(allKeys);

//Que6 Get all the values of users object

Ans:
    const allValues = Object.values(users)
console.log(allValues)



//Que: Count logged in users,count users having greater than equal to 50 points from the following object.*/

// const getArray = Object.entries(users)
// const getArrayLength = getArray.length
// console.log(getArray)
// console.log(getArray[0].age)
// console.log(getArrayLength);
// let getPoint = 0;
// for (i = 0; i < getArray.length; i++) {
//     getPoint = getArray[i]
//     console.log(getPoint)
// }
// const getPoints = Object.entries(users.John)
// console.log(getPoints)
//     // const address = Object.keys(copyPerson.address)


//     const user = {
//       Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//       },
//       Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//       },
//   }
//   const convertArray = Object.entries(users);
//   console.log(convertArray[1])
