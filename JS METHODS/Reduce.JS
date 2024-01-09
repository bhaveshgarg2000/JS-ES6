const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = nums.forEach(NewNums)


function NewNums(value, index, arr) {
    console.log(`nums[` + index + `] = ` + value)
}
console.log(newNum)