let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords) // ['Hi', 'Goodbye']
console.log(myOtherWords) // ['Hi', 'Goodbye']

// The variables reference the same object. After a mutating event, you can see the change with all
	// varaibles referencing that object.