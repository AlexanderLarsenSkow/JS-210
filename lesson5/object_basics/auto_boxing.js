let a = 'hi';
console.log(typeof 'a'); // String primitive

let stringObject = new String('hi');
console.log(stringObject); // "object" this is a string object

console.log(a.toUpperCase());  // HI auto boxing taking place.
console.log(stringObject.toUpperCase()); // HI

console.log(typeof a); //string, coercion only temporary
console.log(typeof stringObject); // object