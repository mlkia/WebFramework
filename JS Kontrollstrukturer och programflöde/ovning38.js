const prompt = require('prompt-sync')();
let number = prompt("Enter the number: ");

while(number > 2)
{
	if(number % 2 !== 0)
	{
		number = number * 3 + 1;
	} 
	else
	{
		number = number / 2;
	}
	console.log(number);
}