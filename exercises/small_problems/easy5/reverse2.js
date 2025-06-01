/*
	input: string of 1 or more words
	output: string with some words reversed

	Rules:
		reverse all words that have 5 length or greater.
*/

const reverseWord = word => word.split('').reverse().join('');

function reverseWords(words) {
	return words.split(' ')
		.map(word => word.length >= 5 ? reverseWord(word) : word)
		.join(' ');
}

console.log(	reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"