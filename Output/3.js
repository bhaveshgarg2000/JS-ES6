var x = 1;
if (function test() { }) {
    x += typeof test
}
console.log(x)

// Output: 1undefined
// 1 as value x is 1 and undefined cz the function is defined in outer scope 