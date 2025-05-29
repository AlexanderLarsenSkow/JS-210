let initials = [
	'A', 'B', 'C'
];

let stupidDesign = initials + ',D';

console.log(stupidDesign); // A,B,C,D

// Adding an array to another value turns them into strings.
// non-mutating.

// Doesn't work with two arrays either:

let newOne = initials + ['D'];
console.log(newOne); // A,B,CD SO STUPID