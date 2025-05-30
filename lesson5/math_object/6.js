// Math.random() returns random floating point number between 0 and 1.

/*
	input: max and min
	output: random number that is integer between these numbers.

	Rules:
		make sure max is max and min is min
		make sure they are not equal
		return both numberes as well?
*/

function getRandom(min, max) {
	[max, min] = [Math.max(min, max), Math.min(min, max)];
	if (min === max) return max;

	randomMax = Math.floor(Math.random() * max);
	randomMin = Math.floor(Math.random() * min);

	return [min, randomMax - randomMin, max];
}

console.log(getRandom(10, 5))
console.log(getRandom(10, 10));
console.log(getRandom(1, 10))
console.log(getRandom(2, 50))
console.log(getRandom(30, 1000))
console.log(getRandom(20, 200))