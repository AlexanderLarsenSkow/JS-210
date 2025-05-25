// average of 3 numbers in a function

let sum = (num1, num2, num3) => num1 + num2 + num3

function average(num1, num2, num3) {
	return sum(num1, num2, num3) / 3
}

console.log(average(10, 15, 20)) // 15
