//Variabler - scope (function)


console.log('Variabler - scope (function)');
let a = 5 //global variable
let b = 10 //global variable
function magic() {
    let a = 10  //local variable
    b = 20  //The same global variable
}
magic()
console.log(a, b)

/* Result
5 20
*/