// var variables have function scope, so they're available everywhere inside the function

function fool() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // 1
  // console.log(b); // ReferenceError: b is not defined Strange behavior.
}

fool();

function foo() {
	if (false) {
		var a = 1;
	}
	console.log(a) // undefined, no Reference Error
}

foo();