// determine if a value passed into a function is NaN.

// Problem: We need to determine if something is a number or not.
// return true if it is NaN, false if it is not.

// What triggers NaN? dividing a number by 0... that won't work here since we don't want a number.
// actually, 1 / 0 is infinity. So that's the answer. Divide by 0.


 function isNotANumber(value) {
	const zero_div = value / 0;
	zero_div !== Infinity || zero_div !== -Infinity
 }

let isNotANumber2 = (value) => value !== value;

console.log(isNotANumber(10)) // false
console.log(isNotANumber(5)) // false
console.log(isNotANumber('a')) // true
console.log(isNotANumber([])) // true
console.log(isNotANumber(null)) // true