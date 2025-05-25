let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0]; // Hello
myWords[0] = 'Hi'; // mutating action

console.log(myWords) // ['Hi', 'Goodbye']
console.log(myWord) // Hello