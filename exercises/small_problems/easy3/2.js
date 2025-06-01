let numbers = [];
let lastNum;

for (let i = 1; i <= 6; i++) {
	if (i < 6) {
		numbers.push(prompt(`Enter number ${i}:`));
	} else {
		lastNum = prompt(`Enter the last number:`);
	}
}

if (numbers.includes(lastNum)) {
	console.log(`The number ${lastNum} appears in [${numbers}].`)
} else {
	console.log(`The number ${lastNum} does not appear in [${numbers}].`)
}