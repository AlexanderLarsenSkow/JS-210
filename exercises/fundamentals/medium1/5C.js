var counter = 5;
var rate = 3;

function counter(count) { // this goes first, then reassigned to 5.
  // ...
}

console.log(counter, rate); // 5, 3

console.log('The total value is ' + String(counter * rate)); // 15