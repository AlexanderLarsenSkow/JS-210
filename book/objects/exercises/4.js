// Algorithm:
// Use Object.keys then map on that array.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

upperKeys = Object.keys(obj).map(key => key.toUpperCase());

console.log(upperKeys);