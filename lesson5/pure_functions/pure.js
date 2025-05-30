/*
	Pure Functions:
		- have no side effects
		- Given same set of arguments, function returns same value during lifetime.
*/

const square = value => value * value;

/*
No side effects.
return value depends on argument.
will always return same value with same argument.

nothing else in the program can influence the function during its lifetime.
*/