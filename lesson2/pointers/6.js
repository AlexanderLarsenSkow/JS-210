let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';

myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // Hello

// reassigning one variable doesn't affect another.