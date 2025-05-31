const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function findDivider(integer) {
	let divider = 1;

	while (divider <= integer) {
		divider *= 10;
	}

	return Math.floor(divider / 10);
}

function addZeroes(value, divider) {
	let zeroes = '';

	if (value === 0 & divider > .1) {
		while (divider > .1) {
			zeroes += '0';
			divider /= 10;
		}
	}

	return zeroes;
}

function integerToString(integer) {
	if (integer === 0) return '0';
	let value = integer > 0 ? integer : -integer;
	let divider = findDivider(value);

	let result = '';
	let digit;

	while (value > 0) {
		digit = Math.floor(value / divider);
		result += DIGITS[digit];
		
		value -= (digit * divider);
		divider /= 10;
		result += addZeroes(value, divider)
	}

	return result;
}

function signedIntegerToString(integer) {
	let result = integerToString(integer);

	if (integer > 0) {
		return '+' + result;
	}
	else if (integer < 0) {
		return '-' + result;
 	} else {
		return result;
	}
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));      // "0"
console.log(signedIntegerToString('-1000'))
