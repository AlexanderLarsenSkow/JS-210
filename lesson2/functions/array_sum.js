function sum(numbers) {
	let total = 0;

	for(let index = 0; index < numbers.length; index++) {
		total += numbers[index];
	}
	return total;
}

let average = (numbers) => sum(numbers) / numbers.length;

console.log(average([1, 2, 3, 4, 5])) // 3
console.log(average([10, 20, 50, 20, 30])) // 26

const TEMPERATURES = [76, 89, 82, 78, 85];
console.log(average(TEMPERATURES)); // 82