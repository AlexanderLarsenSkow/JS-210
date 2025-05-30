// Which ones have side effects?

// yes, logging
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// no side effects
function sum2(a, b) {
  a + b;
}

// no side effects
function sum3(a, b) {
  return a + b;
}

// Calls Math.random(), outside of function, side effect
// does not have a consisten return value because of random factor.
function sum4(a, b) {
  return a + b + Math.random();
}

// no side effects, does not call Math.PI()
function sum(a, b) {
  return 3.1415;
}