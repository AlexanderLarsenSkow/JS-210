/*
	Write a function isPrime() that returns true if the number is prime and false if not.
	Prime:
		Only divisible by itself and 1.
		11 is prime.
		0 does not count as prime. return false if 0 appears.

	algo: iterate through numbers from 2 to 9. If it is divisble by any of these numbers, it isn't prime.
		return false if the number is 0.

	Take all multiples, add them to an array.
	If the array size is 3 or more, return false.
	add to the array if the it is a multiple.

	Calculate start point? Start at the number. Minus by 1.
	don't add to the array if the number is already there.

*/

function isPrime(number) {
	if (number <= 1 || 
		(number > 2 && number % 2 === 0)) return false;
	let multiples = [1, number]

	for (let count = number; count >= 2; count--) {
		if (number % count === 0 && !multiples.includes(count)) {
			multiples.push(count);
		}
	}

	return multiples.length === 2;
}

console.log(isPrime(1) === false);   // false
console.log(isPrime(2) === true);   // true
console.log(isPrime(3) === true);   // true
console.log(isPrime(43) === true);  // true
console.log(isPrime(55) === false);  // false
console.log(isPrime(0) === false);   // false