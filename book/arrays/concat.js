// concat adds adds two arrays together but doesn't mutate the caller.

let array = [1, 2, 3];
let array2 = [4, 5, 6];

newArr = array.concat(array2);

console.log(newArr);
console.log(array);

console.log(newArr !== array);