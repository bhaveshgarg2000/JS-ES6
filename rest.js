// ES5

// function sum(a, b) {
//     return a + b
// }


// ES6
const sum = (...input) => {
    // console.log(input)
    let sum = 0
    for (let i of input) {
        sum += i;
    }
    return sum
}

const Names = (a, b, ...c) => {
    console.log(a, b, c)
    // console.log(a, b, c)
    for (let i in c) {
        console.log(c[i])
    }
    console.log(c.indexOf('B havesh'))
    console.log(c.length)
    // console.log(c[0])
}

console.table([
    Names('Virat', "Rohit", "Ronaldo", "Jadeja", "Suresh", "Bhavesh", "Rajesh", "Mukesh")

])