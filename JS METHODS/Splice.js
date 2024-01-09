const numbers = [1, 2, 3, 4, 5]
const deleted = numbers.splice(2, 3, [8, 9, 10, 11])
console.log(`Deleted elements: ${deleted}`)
console.log(`Numbers elements: ${numbers}`) 