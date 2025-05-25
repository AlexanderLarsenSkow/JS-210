function lunch() {
	let food = 'taco'; // initializing a variable in the local scope of lunch() function
}

function eat(food) { // food is a parameter locally scoped to the eat() function
	console.log(`I am eating ${food} right now.`)
}

function drink() { // drink is a function and a variable added to the global scope of the program.
	console.log('I am drinking so much gatorade right now!')
}