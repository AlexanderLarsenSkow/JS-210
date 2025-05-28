/*
Problem:
	input: integer greater than 0.
	
	"p": product, "s": sum of all numberes between 1 and the number.
*/

let number = parseInt(prompt("Enter an integer greater than 0:"), 10);
console.log(number);

let sumOrProduct = prompt("Enter \"s\" to compute the sum, or \"p\" to compute the product.");
sumOrProduct = sumOrProduct.toLowerCase();
console.log(sumOrProduct);

function sum(number) {
	let total = 0;

	for (let count = 1; count <= number; count++) {
		total += count;
	}

	return total;
}

function product(number) {
	let total = 1;

	for (let count = 2; count <= number; count++) {
		total *= count;
	}

	return total;
}

let result;

switch(sumOrProduct) {
	case 's':
		result = sum(number);
		console.log(`The sum of the integers between 1 and ${number} is ${result}.`)
		break;
	case 'p':
		result = product(number);
		console.log(`The product of the integers between 1 and ${number} is ${result}.`)
		break;
}