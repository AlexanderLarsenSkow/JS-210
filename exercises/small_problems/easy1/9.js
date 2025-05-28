/*
Problem:

	Write a function that takes a number and takes the sum of all numbers between 1 and the number
	that are multiples of 3 and 5.

	Note: the number only has to be a multiple of one of them.

	example:
		10

		3 + 5 + 6 + 9 + 10
*/

function multisum(number) {
	let total = 0;

	for (let count = 1; count <= number; count++) {
		total += count % 3 === 0 ? count : 0;
		if (count % 3 === 0 && count % 5 === 0) continue;

		total += count % 5 === 0 ? count : 0;
	}

	return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168