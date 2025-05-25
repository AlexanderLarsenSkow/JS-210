function changeMyWord(word) {
	console.log(word); // hello
	word = word.toUpperCase();
	return word; // return upper case word
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord); // HELLO 

// not mutating function, still we're changing the reference of myWord to be the return value of
	// changeMyWord