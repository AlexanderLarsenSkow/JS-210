// How old is Teddy?

/*
Random age between 20 and 200.
*/

function randomTeddyAge() {
	const max = 200;
	const min = 20;

	let age = (Math.floor(Math.random() * (max - min + 1) + min)); 

	return `Teddy is ${age} years old!`
}

console.log(randomTeddyAge());