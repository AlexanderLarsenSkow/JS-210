// Shallow Copying Arrays:

let array = ['a', 'b', 'c'];
let copy = array.slice();
let copy2 = [...array]; // spreads elements of array into an array literal.

console.log(copy2) // ['a', 'b', 'c']

// shallow copies are fine for arrays with primitive values, as they can't be mutated.

// But what about arrays with subarrays?

let masterArray = [['a'], ['b']];
let masterCopy = masterArray.slice();

masterCopy[0][0] = 'c';

console.log(masterCopy); // [['c'], ['b']]
console.log(masterArray); // [['c'], ['b']]

// The subarray is mutated too! Because this is a shallow copy.

// Deep Copying nested arrays:

let deepArray = [['a'], ['b']];
let deepCopy = deepArray.map(array => array.slice());

// map returns a new array, and every subarray is copied with slice() and returned in the new array.

deepCopy[0][0] = 'c';

console.log(deepCopy); // [['c'], ['b']]
console.log(deepArray); // [['a'], ['b']]

// no mutation of original object.

// Deep Copy nested Objects:

let deepObjects = [{a: 1,}, {b: 2,}, {c: 3,}];
let objectsCopies = deepObjects.map(object => Object.assign({}, object));

objectsCopies[0].a = 10;

console.log(objectsCopies); // [{a: 10,}, {b: 2,}, {c: 3,}];
console.log(deepObjects); // [{a: 1,}, {b: 2,}, {c: 3,}];

// deepObjects, the original collection, is unaffected!

// If there is a mix of subarrays and sub-objects, use JSON methods:

let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr); // converts basic objects to strings
let deepCopiedArr = JSON.parse(serializedArr); // converts back to objects 

deepCopiedArr[1].push('baz');
console.log(deepCopiedArr); // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
console.log(arr); // => [ { b: 'foo' }, [ 'bar' ] ]