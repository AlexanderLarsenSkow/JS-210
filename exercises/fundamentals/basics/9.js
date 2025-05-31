// Convert Number to String
/*
	input: integer
	output: string

	examples: 4321 => '4321'
	0 => '0
	5000 => '5000'

Data Structures:
	not sure we can turn this into an array.
	mathematic... rip.

places: 4: / by 1000
3: / by 100
2: / by 10
1: / by 1

figure out closest 1's place? 

how to get dividor? multiply 1 by 10 until it is greater than the number.
Then divide it by 10 because we want it to be less.

10,000 > 4321
10,000 / 10 => 1000

divider = 1000
value / 1000 push that to array
value -= dividor * result. 4321 - 4321 => 321
321 / 100 => 3 push to array
value -= dividor again
21 / 10 => 2
1 / 1 => 1


Algo:
	first, find the divider.
	until the divider is greater than the integer,
	continue to multiply 1 by 10.
	return the divider divided by 10, so it's less than the number but has teh same place.

	MAIN FUNCTION
		divider is the findDiv function
		Divide the value by the divider, pushing the digits string value into a string.
		set the value equal to itself minus the divider * the result.
		set the divider to itself divided by 10.
		return the string.
*/

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
	let divider = findDivider(integer);
	if (divider === 0) return '0';

	let value = integer;
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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(5432));
console.log(integerToString(100));
console.log(integerToString(10000000));