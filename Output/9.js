let c = { greeting: 'Hey!' };
let d;

console.clear()
d = c;
console.log(c.greeting);
c.greeting = 'Hello';
console.log(c.greeting);
console.log(d.greeting);