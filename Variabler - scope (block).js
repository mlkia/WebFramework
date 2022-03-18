//Variabler - scope (block)

console.log('Variabler - scope (block)');
var w = 1;
var x = 5;
let y = 10; //global variable
let z = 20;
console.log('Före blocket: ',w,x,y,z);

if(true){
	w = 20;
	var x = 500;
	let y=1000; //local variable
	z = 2000;
	 
	console.log('Inuti if-blocket: ',w,x,y,z);
}

console.log('Utanför blocket: ',w,x, y,z);

/*Result
Variabler - scope (block)
Före blocket:  1 5 10 20
Inuti if-blocket:  20 500 1000 2000
Utanför blocket:  20 500 10 2000
*/