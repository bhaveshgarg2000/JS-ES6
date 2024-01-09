console.clear()
const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log(first)
console.log(second)
console.log(rest)

console.log("")
const { a, b, ...restObj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(`A : ${a}`); // Outputs: 1
console.log(`B : ${b}`); // Outputs: 2
console.log(`RestOP :`, restObj); // Outputs: { c: 3, d: 4 }