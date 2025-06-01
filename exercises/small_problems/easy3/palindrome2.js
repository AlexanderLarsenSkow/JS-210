// isRealPalindrome

/*
	input: string
	output: true or false

	Rules:
		case doesn't matter.
		Weird characters don't matter. non-alphanumeric chars.


	Examples:
isRealPalindrome('madam');               // true basic
isRealPalindrome('Madam');               // true (case does not matter), casing
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter), 
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
// 

Data Structures:
	split into an array. filter out all non alphanumeric characters.
	take a downcase of the string immediately as well.

Algo:
	helper method, remove nonalphnumerics
	 - filter out everything that doesn't match the regex.

		lowercase the string.
		check if the reversed string filtered is equal to the string filtered.
*/

function onlyAlphaNumerics(string) {
	return string.split('').filter(char => /[a-z0-9]/.test(char)).join('');
}

function isRealPalindrome(string) {
	string = onlyAlphaNumerics(string.toLowerCase());
	return string === string.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321)'));            // false