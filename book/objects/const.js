const myObj = {foo: 'bar', qux: 'xyz'};
myObj.qux = 'hey there';
myObj.foo = 'joe';

console.log(myObj) // {foo: 'joe', qux: 'hey there'}

// myObj = 1; // TypeError: Assignment to constant variable.

// Use Object.freeze() to prevent inner elements from being reassigned.

const obj2 = Object.freeze({foo: 1});
obj2.foo = 2;

console.log(obj2) // {foo: 1} value didn't change at foo.
