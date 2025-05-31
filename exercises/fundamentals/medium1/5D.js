let counter = 5;
let rate = 3;

function counter(count) { // SyntaxError: identifier counter has already been declared.
  // ...
}

console.log('The total value is ' + String(counter * rate));