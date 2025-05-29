// this time, rreturn the last n count of elements:

function lastNOf(array, count) {
	let index = array.length - count;
	return array.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]