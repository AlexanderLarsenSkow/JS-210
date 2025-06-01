/*
	input: number
	output: true if palindrome false if not.

	rules:
		basic

	examples:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
// 

Convert to string, basic check.
*/

function isPalindromicNumber(number) {
	number = String(number);
	return number === number.split('').reverse().join('');
}

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22))        // true
// console.log(isPalindromicNumber(5))        // true
