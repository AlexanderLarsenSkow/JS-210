let myWord = 'Hello';
let myOtherWord = myWord;

myWord = 'Goodbye';

console.log(myWord); // Goodbye
console.log(myOtherWord); // Hello

// Reassigning one variable doesn't affect another.