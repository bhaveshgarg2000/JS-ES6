// const Num = [1.2, 5, 77, 55]
// const Number = (element) => { Num > 1 }
// const index = Num.findIndex(Number)
// console.clear()
// console.log(`Index : ${index}`)


const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
console.clear()
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3