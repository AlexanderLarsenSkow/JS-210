// What is logged to the console now?

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd'; // creating property
myArray['e'] = 5; // property
myArray[3] = 'f'; // creating element at index 3;

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1': 'd', e: 5]