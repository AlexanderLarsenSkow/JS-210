/*
	Write a function logMultiples that takes one argument number.
	It should log all multiples of the argument bewteen 0 and 100.
	THey must also be odd.

	Log values in descending order.

	Algo:
		start at 100, work way down to 1.
		only log a number if it's a multiple of the number and is odd.
*/

function logMultiples(number) {
	for(let count = 100; count >= 1; count--) {
		if (count % number === 0 && count % 2 === 1) {
			console.log(count);
		}
	}
}

// logMultiples(17); // 85 51 17

// logMultiples(21);
// output (3x and 1x)
// 63
// 21

function largestMultipleUnder100(number) {
	return Math.floor(100 / number) * number;
}

function efficientMultiples(number) {
	const start = largestMultipleUnder100(number);

	for (let count = start; count >= 1; count -= number) {
		if (count % 2 === 1) {
			console.log(count);
		}
	}
}

efficientMultiples(17);
efficientMultiples(21)
