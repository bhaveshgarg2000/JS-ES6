Num = [1, 2, 3, 4, 5, 6, 7]
function multiply(value, index, arr) {
    return value * index;
}
const NewMapArr = Num.map(multiply)
console.clear()
// console.log(`New Map Arra : ${NewMapArr}`)


const Products = [
    {
        name: "Bhavesh",
        price: 10,
        count: 1

    },
    {
        name: "Bhavuk",
        price: 80,
        count: 4

    },
    {
        name: "Virat",
        price: 20,
        count: 5

    },


]



const newProduct = Products.map((item) => { return item.price * item.count }
)
console.log(`New Product Price : ${newProduct}`)