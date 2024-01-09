// String
const Name = ['Kunal', 'Virat', 'Whyrat', 'Bhavuk', 'Zehan']
const NewNames = ['Florin', 'Jam', 'Shyam', 'Ram']
const sortedNames = NewNames.sort();
console.log(`Sorted Name : ${sortedNames}`)
// Number
function compareFn(a, b) {
    return a - b;
}

const Number = [200, 54, 44, 2, 1]
const NewNumberArray = [9, 10, 1, 0, 7, -1, 4]
const sortedNumber = NewNumberArray.sort(compareFn);
console.log(`Sorted Numbers : ${sortedNumber}`)