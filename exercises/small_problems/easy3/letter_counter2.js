/*
	input: string
	output: object with counts

	Rules:
		modify it to exclude non-letters.

	Algo: same, but filter out the nasty characters.
*/

function removeNonLetters(sentence) {
	let sanitizedWords = sentence.split(' ').map(function(word) {
		return word.split('').filter(char => /[a-zA-Z]/.test(char)).join('');
	})

	return sanitizedWords.join(' ');
}

function wordSizes(sentence) {
	let count = {};
	if (sentence === '') return count;
	
	sentence = removeNonLetters(sentence);

	sentence.split(' ').forEach(function(word) {
		let length = word.length;

		if(count.hasOwnProperty(length)) {
			count[length] += 1;
		} else {
			count[length] = 1;
		}
	})

	return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}