/*
	input: string sentence
	output: object 

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 } .
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
// 

Data Structures:
	create an empty object
	set the length of the to the key, and the count to the value.
	If it already has that key, then incrmeent the value.
	if not, set it to the length.

*/

function wordSizes(sentence) {
	let letterCounter = {};
	if (sentence === '') return letterCounter;

	sentence.split(' ').forEach(function(word) {
		let key = word.length;
		
		if (letterCounter.hasOwnProperty(key)) {
			letterCounter[key] += 1;
		} else {
			letterCounter[key] = 1;
		}
	})

	return letterCounter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}