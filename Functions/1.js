// console.log(`H`)
// console.log(`I`)
// console.log(`T`)
// console.log(`E`)
// console.log(`S`)
// console.log(`H`)


// function defination
function getName() {
    console.log(`H`)
    console.log(`I`)
    console.log(`T`)
    console.log(`E`)
    console.log(`S`)
    console.log(`H`)

}
// function call
// getName()
// console.log(getName)




// function Add(a, b) {
//     console.log(a + b);
// }
function Add(a, b) {
    return a + b;
}

// const result = Add(5, 6)
// Add()
// console.log(`Result : `, result)



function userLogged(username = "Hitesh") {
    if (!username) {
        console.log(`Please Enter Username`)
        return

    }
    return `${username} Just logged in`;
}

// it will not print anything cxz we haven't give log() to print 
userLogged("Bhavesh")

console.log(userLogged("Bhavesh"))
console.log(userLogged())
console.log(userLogged("Virat"))