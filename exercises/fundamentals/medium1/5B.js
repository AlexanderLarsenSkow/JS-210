// snippet 2:
	// hoisting / creation phase example.

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // The total value is NaN

// function * undefined.
console.log(counter, rate); // Function: counter, undefined

var counter = 5;
var rate = 3;