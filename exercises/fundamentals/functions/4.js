var myVar = 'This is global';

function someFunction() {
  console.log(myVar); // This is global
}

someFunction(); // logs 'This is global'

/*
	This is global is output because myVar is within the global scope and available anywhere in the program.
*/