function numberRange(integer) {
	if (integer >= 0 && integer <= 50) {
		console.log(`${integer} is between 0 and 50.`);
	}
	else if (integer > 50 && integer <= 100) {
		console.log(`${integer} is between 51 and 100.`);
	}
	else if (integer > 100) {
		console.log(`${integer} is greater than 100!`)
	}
	else {
		console.log(`${integer} is less than 0. :(`)
	}
}

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));