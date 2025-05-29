/*
Input: 2 arrays
Output: array with first el from 1st array and last el from second aray
*/

// function endsOf(array1, array2) {
// 	let newArr = [];
// 	newArr.push(array1[0], array2[array2.length - 1]);
// 	return newArr;
// }

const endsOf = (array1, array2) => [array1[0], array2[array2.length - 1]];

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
