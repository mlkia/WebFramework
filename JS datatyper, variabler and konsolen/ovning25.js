const prompt = require('prompt-sync')();
let x = prompt("Enter the Number");
x = parseFloat(x);

console.log(Math.round(x));
console.log(x.toFixed(1));
