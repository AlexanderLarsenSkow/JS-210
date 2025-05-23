let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

evenOdds = myArray.map(function(number) {
	if(number % 2 === 0) {
		return 'even';
	}
	else {
		return 'odd';
	}
})

console.log(evenOdds);

ternary = myArray.map(function(number) {
	return number % 2 === 0 ? 'even' : 'odd';
})

console.log(ternary);