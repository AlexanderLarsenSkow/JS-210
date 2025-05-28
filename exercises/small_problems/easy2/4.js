/*
	Fibbonaci

Problem:
	What is fib? next number is sequence is addition of 2 previous numbers:
	0 1 2 3 5 8 13 21 34 55 89 144
	
	input: number of digits in the number.
	output: bigInt that is the first fib index that has those digits.

Examples:

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

findFibonacciIndexByLength(2) => 13

// The last example may take a minute or so to run.

	Data Structures:
		We need to calculate the index of the first number in the fib sequence that matches the digits
			length.
		for loop, keep track of previous numbers. numbe - 1, number - 2.
			if the number converted to a string's length is equal to the length argument, return the number.
			go while it's less than MAX_SAFE_INTEGER.
	
	Algo:
 */

	function digitLength(number) {
		return BigInt(String(number).length);
	}

	function findFibonacciIndexByLength(length) {
		// if (length === 1n) return 1n;

		let num1 = 0n;
		let num2 = 1n;

		for (let count = 1n; count <= BigInt(Number.MAX_SAFE_INTEGER); count++) {
			if (count % 2n === 0n) num1 += num2;
			if (count %2n === 1n) num2 += num1;

			if (digitLength(num1) === length || digitLength(num2) === length) {
				return count;
			}
		}
	}

// Solved all test cases!
console.log(findFibonacciIndexByLength(1n) === 1n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n)=== 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.