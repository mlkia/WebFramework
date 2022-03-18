const prompt = require('prompt-sync')()

console.log('Sign up');
let userName = prompt('Input User Name: ');
let password = prompt('Input Password: ');

console.log(`Welcome ${userName} please entrert your password:`);

let passwordInput = prompt('');

if (passwordInput === password) {
	console.log('Welcome');
}else console.log('Wrong password, Try again');