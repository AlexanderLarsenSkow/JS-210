// Array and String Reverse

// Should accept either a string or array
// should return a new string or array.

function reverse(input) {
	let result = Array.isArray(input) ? [] : '';

	for (let index = input.length - 1; index >= 0; index--) {
		let element = input[index];

		if (Array.isArray(input)) {
			result.push(element);
		} else {
			result += element;
		}
	}

	return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]