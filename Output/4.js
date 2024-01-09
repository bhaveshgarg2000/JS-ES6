function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}

sayHi();
// Error I'm Getting
// can't get access age before intitialisation

// Output:
// Undefined and RefereneError