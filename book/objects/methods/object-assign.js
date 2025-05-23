// Object.assign() merges two or more objects into a single object.

let objA = {a: 'foo'};
let objB = {b: 'bar'};

let newObj = Object.assign(objA, objB)

console.log(newObj) // { a: 'foo', b: 'bar' }

console.log(objA) // { a: 'foo', b: 'bar' }

// the first obj argument is also mutated. -_-