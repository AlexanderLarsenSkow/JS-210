let numbers = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i], i)
	
	if (numbers[i] === 5) {
		indexOfFive = i;
		break;
	}
}

console.log(indexOfFive);