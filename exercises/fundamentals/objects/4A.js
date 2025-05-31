// What is logged this time? Further Exploration:

const myObj = {};
myObj[myFunc()] = 'hello, '; // creating a key with the return value of myFunc.

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { funcProp: 'hello, ' }
myObj[myFunc()] = 'world!';
console.log(myObj); // { funcProp: 'world!' }