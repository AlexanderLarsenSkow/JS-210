// Palindrome, reads same forwards and backwards.

/*
	input: string
	output: true or false

	rules:
		return true if the string is a palindrome. Spelled forwards is the same backwards.
		false otherwise.

	String should be equal to itself split into an array, reversed, and rejoined.
*/

function isPalindrome(string) {
	let reversal = string.split('').toReversed().join('');
	return string === reversal;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true