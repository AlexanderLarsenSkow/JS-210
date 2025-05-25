function changeMyWords(words) {
	console.log(words); // ['Hello', 'Goodbye']
	words[0] = 'Hi'; // mutating
}

let myWords = [
	'Hello',
	'Goodbye'
]

changeMyWords(myWords);
console.log(myWords); // ['Hi', 'Goodbye']

// This example acts like pass by reference, as the reference to myWords is mutated inside the function.