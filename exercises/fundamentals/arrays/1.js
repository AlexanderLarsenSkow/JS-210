let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop(); // remove 4
console.log(myArray); // [1, 2, 3] because we removed 4
console.log(myOtherArray); // [1, 2, 3] because they're the same object, same reference

myArray = [1, 2]; // reassigning myArray here
console.log(myArray); // [1, 2]
console.log(myOtherArray); // [1, 2, 3] reassigning does not affect other variable's references.