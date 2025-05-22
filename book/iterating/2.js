// factorial

/*
Problem: Compute factorial using a for loop
	takes an argument number.
	We want to compute all of the multiplications between 1 and the number.
	
Examples:
	factorial(2) => 2 * 1 === 1
	factorial(3) => 3 * 2 * 1 === 6
	factorial(5) => 4 * 3 * 2 * 1 === 24

Data Structures:
	for loop: start at 1, while the number is less than the number passed in. increment by 1.
	Multiply each number together and return that number.
*/

function factorial(number) {
	let product = 1

	for(n = 1; n <= number; n ++) {
		product *= n
	}
	return product
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))