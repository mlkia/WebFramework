const prompt = require ('prompt-sync')();

let sentence = prompt ('Enter a new word ');

let stop = false;

while (!stop){
	
	newWord = prompt ('Enter a new word ');
	if (newWord === '' || newWord === '.') stop = true;
	else
	{
		sentence = sentence + ' ' + newWord;
		console.log(sentence);
	}
}
