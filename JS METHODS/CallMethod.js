console.clear()
const names = {
    Fname: "Sachin",
    Lname: "Tendulkar",
    printName: function () {
        console.log(this.Fname + ` ` + this.Lname);
    }
};
// name method call
names.printName()

const name2 = {
    Fname: "Virat",
    Lname: "Kohli",
}

names.printName.call(name2)
