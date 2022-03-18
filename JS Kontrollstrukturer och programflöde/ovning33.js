const prompt = require('prompt-sync')();

let loop = true;
let theNumber = Math.floor(Math.random() * 101);
let numberOfTry = 0;

while (loop) {
	console.log('Guess a number between 1 and 100');
	let guess = prompt('');
	guess = parseInt(guess);

	if (guess > theNumber) {
		console.log('Too high');
	} else if (guess < theNumber) {
		console.log('Too low');	
	} else {
		console.log('You got it!');
		loop = false;
	}
	numberOfTry++;
}

console.log(`You tried ${numberOfTry} times`);