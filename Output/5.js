for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

// Output:
// Output as 3 3 3 due variable declared with var and it become global scope
// and
// i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.
// 0 1 2



// 3
// 3
// 3
// and
// 0
// 1
// 2