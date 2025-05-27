// startsWith

/*
Problem:
	Input: two strings
	output: true or false booleans

	Rules:
		if the second string starts at the beginning of the first string, return true.
		else, return false.
		can use brackets and length property. That's it.

Examples:
	'We put comprehension and mastery above all else';
	(str, 'We');              // true  We starts the first two indicies
	(str, 'We put');          // true We put starts. we put starts
	(str, '');                // true empty string is counted as substring.
	(str, 'put');             // false put does not start.

	String = 'We put comprehension and mastery above all else!';
	(str, longerString);      // false
	 
Data Structures:
	for 
	iterate to the length of the search string.
		check the elements at the same index in the main string.
	if any element is different, auto return false.
	If finishing iteration, and we don't return false, return true.

	algo 
*/

function startsWith(string, search) {
	for (let index = 0; index < search.length; index++) {
		let searchChar = search[index];
		let stringChar = string[index];

		if (searchChar !== stringChar) return false;
	}

	return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false