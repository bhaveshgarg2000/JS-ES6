// function mult(a, b) {
//     b = (typeof b != 'undefined') ? b : 1
//     console.log(b)
//     return a * b
// }
// ES5


function mult(a, b) {
    return a * b

}


// ES6

const Mult = (a = 10, b , c) => {
    console.log(a,b,c)
    return a * b * c
}
console.table([mult(5, 2), Mult(9,10,12)])