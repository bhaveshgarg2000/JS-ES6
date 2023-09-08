// #primitive dataTypes
// 7 types
/*
String
Number
Boolean
null,
unbdefined
object,
symbol,
BigINt
*/

const score = 0;
const scoreVal = 100.3;
const loggedIn = true;
const value = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

const bigNum = 34555555555555555555555555555555555555555n;
// console.table([bigNum]);

// Reference Type(Non Prmitive)
/*
Array
objects
Funcions


*/

const heroes = ["shaktiman", "spiderman", "doga"];
let object = {
    name:"Bhavesh",
    age:25,
    city : "Delhi"
}
console.table([heroes,object])


function name(){
    console.log("Hello Function")
}

console.log(name());