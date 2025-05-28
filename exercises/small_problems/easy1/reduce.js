let sum = [1, 2, 3, 4, 5].reduce(function(acc, number) {
	return acc + number;
}, 0)

console.log(sum); // 15

let product = [1, 2, 3, 4, 5].reduce((acc, number) => acc * number, 1);
console.log(product); // 120