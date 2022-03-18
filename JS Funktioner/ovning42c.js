function add (a, b){
	return a + b;
}

function multi  (a, b, c){
	return a * b * c;
}

function twoOpre(a, b, c, d){
	return result = add (multi (a, b, c), d);;
}

console.log(twoOpre(2,4,3,5))