// Create parseInt() function that transforms a string to a number.

function stringToInteger(numString) {
	for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
		if (numString == i) return i;
	}
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

// 2nd Style:

const DIGITS = {
	0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
	6: 6, 7: 7, 8: 8, 9: 9,
};

function stringToInteger2(numString) {
	let value = 0;
	let numbers = stringToNumbers(numString);

	numbers.forEach(function(number) {
		value = 10 * value + number;
	})

	return value;
}

function stringToNumbers(numString) {
	return numString.split('').map(string => DIGITS[string]);
}

console.log(stringToInteger2('4321'));      // 4321
console.log(stringToInteger2('570'));       // 570
