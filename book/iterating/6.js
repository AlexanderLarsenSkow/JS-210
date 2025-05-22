// Factorial Recursion

/*
Problem: Compute factorial using recursion
	takes an argument number.
	We want to compute all of the multiplications between 1 and the number.
	
Examples:
	factorial(2) => 2 * 1 === 1
	factorial(3) => 3 * 2 * 1 === 6
	factorial(5) => 4 * 3 * 2 * 1 === 24

Data Structures:
	take a number
	multiply the number by n - 1 from the same function. return that value.
*/

function recursiveFactorial(n) {	
	if (n > 1) {
		return n * recursiveFactorial(n - 1);
	} else {
		return 1
	}
}

console.log(recursiveFactorial(1));     // => 1
console.log(recursiveFactorial(2));     // => 2
console.log(recursiveFactorial(3));     // => 6
console.log(recursiveFactorial(4));     // => 24
console.log(recursiveFactorial(5));     // => 120
console.log(recursiveFactorial(6));     // => 720
console.log(recursiveFactorial(7));     // => 5040
console.log(recursiveFactorial(8));     // => 40320