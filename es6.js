// template string
const numbers = [45, 52, 48, 52];

const student = {
    name: 'salam',
    age: 45,
    movies: ['king', 'badsha']
};
const about = `My name is ${student.name} age of ${student.age} also liked movie 
${student.movies[1]}`
console.log(about);

// arrow function
const getFiftyfive = () => 55;
const addsixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
// multy arrow function 
const addThree = (x, y, z) => x + y + z;
// multy line arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
const result = doMath(5, 5);
console.log(result);
// spread operator

const newNumber = [...numbers]
numbers.push(99);
console.log(numbers);

console.log(newNumber);

// create a new array from a older array and add an element
const currentNumber = [...numbers, 55]
console.log(currentNumber);