/*1a Skriv en funktion som tar två parametrar som ska vara heltal. Den ska returnera ett slumptal vars värde är mellan parametrarna. Utgå från Math.random().
Exempel: rand(2, 5) → något av 2, 3, 4 och 5*/


function rand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
  }
  //console.log(getRandomArbitrary(2, 8));

/*1b Skriv en funktion som skapar en lista med slumptal. Funktionen ska ta tre parametrar: hur lång listan ska vara och mellan vilka tal som slumptalet ska ligga.*/

function creatList (length, min, max){

	let lista = [];
	for (let i=0; i < length; i ++){
		lista.push(rand(min, max));
	}
	return lista.forEach(item => console.log(item));
}

creatList (5, 1, 10);


