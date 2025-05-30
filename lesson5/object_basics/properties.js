// use . or [] to get data from an object.

let animal = 'turtle';
console.log(animal.length); // 6

let colors = {
	red: 'red',
	yellow: 'yellow'
};

console.log(colors.red); // red
console.log(colors.yellow); // yellow

// Set a new value with assignment.

let count = [0, 1, 2, 3, 4, 5];
count.length = 2;

console.log(count); // [0, 1]

colors.blue = 'blue';
console.log(colors); // {red: 'red', yellow: 'yellow', blue: 'blue'}
