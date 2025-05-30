// Empty Array:

let arr = [];
console.log(arr); // []
console.log(arr.length); // 0
console.log(Object.keys(arr)); // []

// Add Elements:

arr = [1, 2, 3]
console.log(arr); // [1, 2, 3]
console.log(arr.length); // 3
console.log(Object.keys(arr)); // ['0', '1', '2']

// Adding non-element properties:

arr[-3] = 5;
arr['foo'] = 'bar';

console.log(arr); // [1, 2, 3, -3: 5, foo: 'bar']
console.log(arr.length); // 3, still returns 3.
console.log(Object.keys(arr)); // ['0', '1', '2', '-3', 'foo']

console.log(arr.map(el => el * 2)); // [2, 4, 6]

// Calling map does not do anything to the properties added. Only the elements.

// Is this array empty?

let newArr = [];
newArr[-3] = 1;
newArr['joke'] = 'joke';

console.log(newArr.length); // 0. YES, it's empty.
console.log(Object.keys(newArr).length); // 2. NO, it's not empty.
