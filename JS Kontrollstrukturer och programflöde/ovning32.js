const prompt = require('prompt-sync')()

let input = prompt('Please enter a number: ')
let number = Number(input)

if( number < 100 ) {
	console.log("It's lower than 100.")
}
else if( number > 100 ) {
	console.log("It's higher than 100.")
}
else if( number === 100 ) {
	console.log("It's exactly 100!")
}
else {
	console.log("That's not a number, try again!")
}