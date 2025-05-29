// this time, rreturn the last n count of elements:
// fix it so if count is greater than the length of teh array, return the entire array.


function lastNOf(array, count) {
	if (count >= array.length) return array.slice();

	let index = array.length - count;
	return array.slice(index);
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(lastNOf(array, 10));