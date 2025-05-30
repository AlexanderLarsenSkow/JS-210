// Length is a property of array objects maintained specifically for arrays

// always non-negative integer.
// length is always 1 greater than last index
// you can set teh value of the length explicitly

let myArray = [];
console.log(myArray.length); // 0

myArray = ['foo', 'bar', 'baz'];
console.log(myArray.indexOf('baz')); // 2
console.log(myArray.length); // 3

// Adding Keys doesn't affect length, however:

let testArr = [];
testArr['foo'] = 'bar';
testArr[0] = 'baz';
testArr[1] = 'qux';

console.log(testArr); // ['baz', 'qux', foo: 'bar']
console.log(testArr.length); // 2. foo: 'bar' doesn't affect length
console.log(testArr.indexOf('bar')); // -1, 'bar' isn't an element

// However, using Object.keyes() will show the object key:

console.log(Object.keys(testArr)); // ['0', '1', 'foo']

// Elements at non-negative integer indicies are elements.
// Elements at string keys are not elements, but the array still records them.

// count all properties in an array:
	console.log(Object.keys(testArr).length); // 3, includes 'foo'