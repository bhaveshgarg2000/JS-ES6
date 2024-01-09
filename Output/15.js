function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());


// TypeError : if we use Person.prototype.getFullName or member.getFullName then will get proper output Lydia Hallie