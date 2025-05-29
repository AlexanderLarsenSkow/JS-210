// Concat

/*
Problem: Write your own concat
	input: 2 arguments, first is always array, second is sometimes array
	output: new array

	Rules:
		- first arg is always array.
		- second arg is sometimes array, sometimes not
		- return new array, no mutation
		- elements in the new array should be in the same order as they appeared.
		- function should copy object references from the args into the new array.
			- making a change to a reference object after concat should affect both.
		- the function should copy the values of primitives.

	Examples:

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6] typical, same order, etc.
concat([1, 2], 3);                     // [1, 2, 3] // 3 added to array.
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"] adding all elements, start with first
concat([2, 3], 'four');                // [2, 3, "four"] // add non array element


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj;                                   // { a: "two", b: 3 }*/

function addArrays(result, array2) {
	for (let index = 0; index < array2.length; index++) {
		result.push(array2[index]);
	}

	return result;
}

function concat(array1, secondArg) {
	let result = array1.slice();

	if (Array.isArray(secondArg)) {
		return addArrays(result, secondArg);
	} else {
		result.push(secondArg);
	}

	return result;
}

console.log(	concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }