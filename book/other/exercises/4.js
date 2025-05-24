let list1 = [1, 6, 3, 2]; // 6
let list2 = [-1, -6, -3, -2]; // -1
let list3 = [2, 2]; // 2

function getMax(numbers) {
	return Math.max(...numbers);
}

console.log(getMax(list1)) // 6
console.log(getMax(list2)) // -1
console.log(getMax(list3)) // 2