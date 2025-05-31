/* Literal

Identify the bug

*/

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]); // actually fine since the literal version of 'b' is used.
console.log(myObject['a']); // should be 'a' undefined
console.log(myObject.a); // name

