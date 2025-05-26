var myVar = 'This is global'; // var keyword

function someFunction() {
  var myVar = 'This is local'; // new local variable that shadows global variable.
}

someFunction();
console.log(myVar); // This is global

// What is happening here is myVar is initialized in the global scope with the var keyword on line 1.
// this makes it available globally. However, in the someFunction() definition, a new local variable
// myVar is defined with var as well that references 'This is local';

// soemFunction() is called on line 7 but this does not affect myVar in the global scope.
// As such, logging myVar to the console outputs the string: This is global