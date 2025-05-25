/*
JS searches the local scope first for the variable country for reassignment, then it goes up the
	hierarchy. Here it finds country in the global scope of the program.

*/

let country = 'Spain';
function update() {
	country = 'Liechtenstein'; 
}

console.log(country) // Spain

update();
console.log(country); // Liechtenstein

// Be super careful. If JS can't find a variable for reassignment, it just creates a new global var.
			// LOL!

function assign() {
	let country1 = 'France';
	country2 = 'Spain' // developer error where 1 becomes 2. New global variable created.
}

assign();
console.log(country2) // prepare for Spain again
console.log(country1) // ReferenceError, since `country1` is properly scoped to assign() by let.