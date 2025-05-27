/*
Problem:
	Given a string, find the index of a substring.
	
	Input: main string and substring
	output: number index

	Rules:
		- search the main string for the substring. return the index of the first character of hte substr
		- lastIndexOf searches for the last instance of the substr and first index of substr.
		- both functions return - 1 if the string doesn't contain the substring.
		- Can only use [] and length property

		2 functions
Examples:

indexOf('Some strings', 's');                      // 5 iterate over characters, return first index
indexOf('Blue Whale', 'Whale');                    // 5 iterate over chars, find sub, first index
indexOf('Blue Whale', 'Blute');                    // -1 blute doesn't exist in the string, -1
indexOf('Blue Whale', 'leB');                      // -1 leB doesn't exist, - 1

lastIndexOf('Some strings', 's');                  // 11 string(s) last one. reverse?
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19 last Whale
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1 // all doesn't exist here.

IndexOf('eabcd', 'abc') // 1
	see a character that doesn't fit, set substring to '';
	then restart. If at any point the test substring === main substring, then we add that first index.
	test substring, substring in the main string. Now we want that index.
		 the current index - the length - 1 of the substring. We get the first index.

Data Structures:
	iterate over the string.

	challenge 1: single character vs. larger substring.
	iterate over character and just compare right across with the index.
		mainString index is the one you want to return.

	chalenge 2: lastIndexOf
		build an array of indicies. Add the index of the first character if the substring is there.

	indexOf Algo
		indexOf
		create a testSub set to ''
		iterate over the string
		If the current character equals the substring character, we add that character to the testSub.
		If not, we set the testSub equal to ''
		reset iteration for the substring (inner loop).
		If the testSub equals the substring at any point, return index - substring.lenght - 1.
		If we finish iteration, return -1.
*/

function indexOf(string, substring) {
	let testSub = '';

	for(let index = 0; index < string.length; index++) {
		for (let innerIndex = 0; innerIndex < substring.length; innerIndex++) {
			let stringChar = string[index + innerIndex];
			
			if (stringChar !== substring[innerIndex]) {
				testSub = '';
				break;
			} else {
				testSub += stringChar;
			}

			if (testSub === substring) {
				return index;
			}
		}
	}

	return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                     // -1
console.log(indexOf('edcabc', 'cabc')); // 2
console.log(indexOf('What do you call a drunken sailor,', 'unken')); // 21

function lastIndexOf(string, substring) {
	let testSub = '';
	let indicies = [];

	for(let index = 0; index < string.length; index++) {
		for (let innerIndex = 0; innerIndex < substring.length; innerIndex++) {
			let stringChar = string[index + innerIndex];
			
			if (stringChar !== substring[innerIndex]) {
				testSub = '';
				break;
			} else {
				testSub += stringChar;
			}

			if (testSub === substring) {
				indicies.push(index);
			}
		}
	}

	let length = indicies.length;
	return length > 0 ? indicies[length - 1] : -1;
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1