const data = {
    name: "Vinod",
    age: 26,
    gender: "M",
    deg: "B.Tech",
};
// console.log(`Name : ${data.name}`);
// let { name, age, gender, deg } = data;
let name, age, gender, degree;
({ name, age, gender, deg: degree } = data);
console.log(`Name : ${name}`)
console.log(`Age : ${age}`)
console.log(`Gender : ${gender}`)
console.log(`Degree : ${degree}`)