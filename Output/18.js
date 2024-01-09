function Person(name) {
    return this.name = "John Doe";
}
const person = new Person("Bhavesh");
console.log(person.name)