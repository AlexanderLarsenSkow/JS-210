let array = [1, 2, 3]
array[0] = 10

console.log(array) // [10, 2, 3]

// use [] to add elements:

array[array.length] = 20;

console.log(array); // 10, 2, 3, 20

// Strangeness with const

const newArr = ['a', 'b', 'c'];
newArr[newArr.length] = 'd';

console.log(newArr) // ['a', 'b' 'c', 'd']