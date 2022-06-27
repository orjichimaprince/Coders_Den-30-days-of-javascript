/*Que: A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript 
score to jsScore and React score to reactScore variable in one line.*/

// Ans:
//     const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
//         [98, 85, 90, 95]
//     ]
// const [names, skills, [HTMLscore, CSSscore, JsScore, ReactScore]] = student
// console.log(names, skills, JsScore, ReactScore)
// let objector = {student}
// console.log(objector)

/*Write a function called convertArrayToObject which can convert the array to a structure object.*/

const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
    [98, 85, 90, 95]
]
const [names, skills, [HTMLscore, CSSscore, JsScore, ReactScore]] = student // question
let namess = 'John'
let scores = [HTMLscore, CSSscore, JsScore, ReactScore]
let storage = [{ names, skills, scores }, { namess, skills, scores }]

const convertArrayToObject = (search) => {
    let namess = 'John'
    for (const index of student) {
        const [names, skills, [HTMLscore, CSSscore, JsScore, ReactScore]] = student
        let scores = [HTMLscore, CSSscore, JsScore, ReactScore]
        let storage = [{ names, skills, scores }, { name: 'John', skills, scores }]
        return storage
    }
}
console.log(convertArrayToObject(student))