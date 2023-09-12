const arr = ['JS', 'C++', 'NODE.JS', 'REACT.JS', 'MongoDB']

// ES6
// let [l1, l2, l3, l4, l5] = arr;
console.log(arr);
console.log(arr.length)
let [t1, , , , t5] = arr;
console.log(`${t1} and ${t5}`)
// console.log(arr.map((maps) => {
//     console.log(maps)
// })) 