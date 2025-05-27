// Greatest Common Divisor

/*
	Create a function that computes the greates common divisor of 2 positive integers.
	it must divide both of them equally and be the greatest one.

	Start at 1, add common divisors to an array. Max the array.
*/

function lesserNum(num1, num2) {
	return Math.min(num1, num2);
}

function gcd(num1, num2) {
	let lowerNum = lesserNum(num1, num2);
	let divisors = [];

	for (let count = 1; count <= lowerNum; count++) {
		if (num1 % count === 0 && num2 % count === 0) {
			divisors.push(count);
		}
	}

	return divisors[divisors.length - 1]
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1