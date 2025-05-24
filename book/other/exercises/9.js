// if 1 divided by the value equals -infinity, it's -0. got it.
// return true if -0 and false if not.

let negZero = (value) => 1 / value === -Infinity;

console.log(negZero(-0)) // true
console.log(negZero(0)) // false
console.log(negZero(10)) // false