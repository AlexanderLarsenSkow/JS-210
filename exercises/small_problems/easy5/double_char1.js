/*
	inptu: string
	output: double every character in new string.

	examples: 'Hello' => 'HHeelllloo'

	data structures:
		array
	
	algo: map with repeat(2)
*/

function repeater(string) {
	return string.split('')
		.map(char => char.repeat(2))
		.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

function repeater2(string) {
	return [...string].reduce(
		(double, char) => double + char.repeat(2), ''
	);
}

console.log(repeater2('Hello'));        // "HHeelllloo"
console.log(repeater2('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater2(''));             // ""
