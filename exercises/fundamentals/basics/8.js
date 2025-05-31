const DIGITS = {
	0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
	6: 6, 7: 7, 8: 8, 9: 9,
};

function stringToSignedInteger(numString) {
	let value = 0;
	const firstChar = numString[0]
	let numbers = stringToNumbers(numString);

	numbers.forEach(function(number) {
		if (firstChar === '+' || /[0-9]/.test(firstChar)) {
			value = 10 * value + number;
		} else {
			value = 10 * value - number;
		}
	})

	return value;
}

function stringToNumbers(numString) {
	let numbers = numString.split('').filter(char => /[0-9]/.test(char));
	return numbers.map(number => DIGITS[number]);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100