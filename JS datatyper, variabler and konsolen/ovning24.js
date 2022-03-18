/*const prompt = require('prompt-sync')();
let x = prompt("Enter the First Number");
let y = prompt("Enter the Second Number");
console.log(`The sum of ${x} and ${y} is ${parseInt(x) + parseInt(y)}`);*/


// or

const prompt = require('prompt-sync')()
let first = prompt('Please input two numbers:');
let second = prompt('')
first = Number(first)  // first - 0, +first, first*1
second = Number(second)


console.log('Sum:        ', first + second);
console.log('Difference: ', first - second);
console.log('Product:    ', first * second);