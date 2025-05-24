let x = '13';	
let y = 9;

console.log(parseInt(x, 10) + y); // currently printing '139'

console.log(x * y); // 117 number

// this is because with -, *, /, % JS coerces the type into a number, whatever it is.
// if any string can't be coerced to a number, the result is NaN.