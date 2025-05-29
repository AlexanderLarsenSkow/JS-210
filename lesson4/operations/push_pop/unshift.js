function unshift(array, element) {
	let copy = array.slice();
	array.length = 1;
	array[0] = element;

	for (let index = 0; index < copy.length; index++) {
		array.push(copy[index]);
	}

	return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]