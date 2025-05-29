/*
	Array Copy Part 2:

	In previous exercise, the value of the reference was copied.
		In this exercise, only the values for the array should be copied, but not the reference.
	
	Implement two alternative ways of doing this.
*/

// One method of copying is using slice(), which creates a shallow copy.
// concat with an empty array.

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

let otherArray = myArray.concat([]);

otherArray.pop(); // remove 3
console.log(myArray); // [1, 2, 3, 4]

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]

console.log(myArray); // [1, 2]