let numbers = [1, 2, 3, 4];
let squares = []

numbers.forEach(function(number) {
	squares.push(number ** 2);
})

console.log(squares);

// Easier with map, which transforms right away.

let squares2 = numbers.map(number => number ** 2);

console.log(squares2);