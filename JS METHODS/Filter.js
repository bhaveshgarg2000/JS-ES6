const num = [1, 2, 3, 4, 5, 6]
const Even = num.filter(isEven);
function isEven(value) {
    return value % 2 === 0;
}
console.clear()

// console.log(`Even Array : ${Even}`)


const People = [
    {
        name: "Kumar",
        age: 24
    },
    {
        name: "Virat",
        age: 24
    },
    {
        name: "Suresh",
        age: 16
    },
    {
        name: "Rajesh",
        age: 15
    },
    {
        name: "Muuna",
        age: 18
    },
]
console.clear()

const Adults = People.filter((item) => {
    return item.age >= 18
})
console.log(Adults)