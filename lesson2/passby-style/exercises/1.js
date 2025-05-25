function changeMyWord(word) {
	console.log(word);
	word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord); // Hello
console.log(myWord); // Hello

// myWord variable and word parameter point to different locations in memory with the same value.