const prompt = require ('prompt-sync')();
let month = prompt ("Enter the month's name: ")

switch (month.toLowerCase()){
	case "januari":
    console.log(1);
    break;
	case "februari":
    console.log(2);
    break;
	case "mars":
    console.log(3);
    break;
	case "april":
    console.log(4);
    break;
	case "maj":
   console.log(5);
    break;
	case "juni":
   console.log(6);
    break;
	case "juli":
    console.log(7);
    break;
	default: console.log ("You entered wrong month's name, Please tray again");
}


