/*
	wordCount

	input: single string.
	output: object with word count for each word in the provided string:

	example:
	wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
//

data structures:
	split into an array.
	iterate through the array.
	if not an object prop
		take the current word and make it a property in a new object with a value of 1.
	else, add 1.
	return the object.
 */

function hasProp(object, prop) {
	return Object.keys(object).includes(prop);
}

function wordCount(sentence) {
	let myCount = {};

	sentence.split(' ').forEach(function(word) {
		if (hasProp(myCount, word)) {
			myCount[word] += 1;
		} else {
			myCount[word] = 1;
		}
	})

	return myCount;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }