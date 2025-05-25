console.log(a); // outputs undefined

var a = 1;

// a is in the Temporal Dead Zone. It knows that a has been initiailzed but hasn't read its
// assigned value yet.