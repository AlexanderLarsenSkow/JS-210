function changeMyWords(words) {
	console.log(words); // ['Hello', 'Goobdye']
	words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords); // ['Hello', 'Goodbye']

// reassigning the local variable words inside the function doesn't affect the myWords variable.