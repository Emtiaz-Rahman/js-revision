// how to declare variable sign let and const 
const fatherName = 'Siddiquar';
let season = 'rany';

// 6basic  conditions:<,>,===,!==,<==,>==
// multiple condition:&&,||

if (fatherName === 'siddiquar' || season === 'reany') {
    console.log
}
else if (fatherName === 'Siddiquar') {

}
else {

}

// array delare
const numbers = [45, 52, 48, 52];
numbers[0] = 52;
console.log(numbers);
const number = numbers[1]
console.log(numbers[2]);

// for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

// function
function multiply(num1, num2) {
    const result = num1 * num2
    return result;
}
const output = multiply(2, 2);
console.log(output);
// object
const student={
    name:'salam',
    age:45,
    movies:['king','badsha']
}
// 3 ways to access property by name
// console.log(student.age);
console.log(student['age']);

console.log(student['myVariable']);