// let myName = 'Bob';
// const saveName = myName;
// myName = 'Alice'; 
// console.log(myName, saveName); // 'Alice', 'Bob'

const myName = 'Bob';
const saveName = myName; // 'Bob' saved
myName.toUpperCase(); // not mutating.
console.log(myName, saveName); // Bob, Bob

// toUpperCase() is a non-mutating method in JS. There is no String !upcase method like in Ruby.
// Also, primitive value are immutable. Including strings.

// Further Exploration:
/*
	The string is able to call a method because toUpperCase() is an instance method for the String class
	That means that it can be called on any instance from the string class, essentially any string object.
*/