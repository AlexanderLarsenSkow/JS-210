// digit list

/* 
	Input: positive integer
	Output: return list of digits.

	examples: splitting into an array

	data structures:
		array, string, etc.
	
	algo: 
		convert to string.
		iterate through string and add to the array
		map the array back to integer values.
*/

function digitList(integer) {
	let digits = String(integer).split('');
	return digits.map(num => parseInt(num, 10));
}

console.log(	digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));       // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));       // [4, 4, 4]