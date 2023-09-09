
setTimeout(() => {
    console.log("TimeOut 5")
}, 5000);
console.log("Second")
console.log("First")

setTimeout(() => {
    console.log("TimeOut 4")
}, 4000);
setTimeout(() => {
    console.log("TimeOut 3")
}, 3000);
console.log("Third")

setTimeout(() => {
    console.log("TimeOut 2")
}, 2000);
console.log("Forth")

setTimeout(() => {
    console.log("TimeOut 1")
}, 1000);