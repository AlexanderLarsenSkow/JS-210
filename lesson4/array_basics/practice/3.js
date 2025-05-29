// manual, non-mutating reverse() Method:

function reverse(array) {
	let reverseArr = [];
	let reverseIndex = array.length - 1;

	while (reverseIndex >= 0) {
		reverseArr.push(array[reverseIndex])
		reverseIndex--;
	}

	return reverseArr;
}

console.log(reverse([1, 2, 3])); // [3, 2, 1]