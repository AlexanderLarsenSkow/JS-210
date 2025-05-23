// indexOf searches an array for the element with the given value and returns the index for it.

let array = [1, 2, 3];
index = array.indexOf(3); // 2

console.log(index) // 2

console.log(array.indexOf(10)); // -1, since no index was found for the element.

// === also used internally. meaning you can't check for a nested array or object. LOL

// indexOf doesn't look past the first occurrence of the value, but you can give it an index
// to search past.

let newArr = [1, 2, 3, 4, 3];

let index1 = newArr.indexOf(3); // 2

let theIndex = newArr.indexOf(3, index1 + 1); // 3, begin search at index 3, 1 after 2.

console.log(`theIndex = ${theIndex}`);