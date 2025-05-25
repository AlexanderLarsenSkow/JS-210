function capitalize() {
	return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
	return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word); // Hello
let exclaimedWord = exclaim(capitalizedWord); // hello!!!

console.log(word); // hello!!!
console.log(capitalizedWord); // Hello
console.log(exclaimedWord); // hello!!!

/*
	Key here is that all 3 strings are different objects. Since strings are immutable in JS, as are all
		primitive objects, they can never be changed and two variables will never reference the same
		oject if they reference primitive values. As such, each function call creates a separate string.
		Nothing is mutated, leading to the results of hello, HELLO, and hello!!! after function invocation.

		The tricky thing to note here is that capitalize() and exclaim() do not have any parameters
		defined in the function declaration. They rely instead on using the global variable word
		in their operations. It seems like the end result could be HELLO!!! but because strings can't
		be mutated and because there is no parameter defined, when capitalizedWord is passed into
		exclaim() nothing is actually done with this value. 
		Instead, 'hello' and '!!!' are added together, since word references the string 'hello'.
*/