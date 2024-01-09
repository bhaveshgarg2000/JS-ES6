// let number = 0;
// console.log(number++); 0 // first print the increase 0 on print but value increse to 1
// console.log(++number); 2 // inrease the print value increases to 2 and the print 
// console.log(number); 2 //value print


function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
// ['', 'is', 'years old']
// Lydia
// 21


// If you use tagged template literals, the value of the first argument is always an array of the string values.
// The remaining arguments get the values of the passed expressions!