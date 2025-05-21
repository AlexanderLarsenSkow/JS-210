const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/* This code will result in an error from the reassignment on line 6.
	Since NAME is a constant, it cannot be reassigned. Trying to do will result
	in an exception.

	Specifically: TypeError: Assignemnt to constant variable.
*/