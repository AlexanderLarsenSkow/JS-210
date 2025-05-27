/*
	using Goldbach's Conjecture, determine the two prime numbers that add up to the given number.

	expectedSum is the parameter name
	logs all combinations of prime numbers that add to the number.

	if expectedSum is odd or less than 4, return null;

	iterate from 2 up to the given number.
	if the expectedSum - the number is prime and so is the number, log them min first, then max.
*/

function checkGoldbach(expectedSum) {
	for (let count = 2; count < (expectedSum / 2); count++) {
		let newNum = expectedSum - count;

		if (isPrime(newNum) && isPrime(count)) {
			let min = Math.min(newNum, count);
			let max = Math.max(newNum, count);

			console.log(min, max);
		}
	}	
}

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

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53