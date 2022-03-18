
let animals = ["dog", "cat", "zebra", "pig", "horse", "cow"];
animals.unshift("elephant");
if(animals.indexOf("pig")=== -1) // Om der ät nåt värde som finns inte i arrayn.
	animals.push("pig"); // push lägger till värdet i sista plats i arrayn.
else console.log("Here is the the pig in the list " + animals.indexOf("pig")); //Tray to delete the pig from the list and see what happen.
	
animals.forEach(item => console.log(item));


