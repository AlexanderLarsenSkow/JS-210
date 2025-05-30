/*
	input: string
	output: object with count of all repeated characters.

	Rules:
		- only return counts for characters with 2 or more.
		- case doesn't matter.

	repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
	repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
	repeatedCharacters('Pet');            // {}
	repeatedCharacters('Paper');          // { p: 2 } uppercase chars don't matter.
 	repeatedCharacters('Baseless');       // { s: 3, e: 2 }

	Data Structures:
		adding keys to an object

		letter count, reassign, toSorted

	Algo:	
		take the lowercase version of the string
		iterate through the string, adding each character to an object iwht a count.
		If the object doesn't have that key, set it to 1.
		If it does, add 1.

		Now, take entries, filter through entries, making sure that the number in each subarr is > 1.
		Take from entries and return a new object.
	
*/

function filterRepeats(repeatObj) {
	let array = Object.entries(repeatObj);
	let filter = array.filter(subarr => subarr[1] > 1);
	return Object.fromEntries(filter);
}

function repeatedCharacters(string) {
	string = string.toLowerCase();
	let repeats = {};

	for (let i = 0; i < string.length; i++) {
		let char = string[i];

		if (repeats.hasOwnProperty(char)) {
			repeats[char] += 1;
		} else {
			repeats[char] = 1;
		}
	}

	return filterRepeats(repeats);
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
