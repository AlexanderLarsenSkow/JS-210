let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a); // returns undefined
console.log(a); // never reassigned, outputs 7

/*
	In this example, global variable a is assign to reference 7 on line 1 and it is passed into
	the myValue() function on line 7. myValue() has 1 parameter `b` that uses addition assignment
	to add 10 its value. However, reassigning the local variable `b` inside the function body doesn't
	affect the global variable `a`. As such, the result of outputting `a` to the console is the number 7.
*/