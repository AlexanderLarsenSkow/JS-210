function greeter(greeting) {
	return function(name) {
		console.log(`${greeting} ${name}!`)
	}
}

greeter('Hi', 'Jake')

let hello = greeter('Hello',);
let hi = greeter('Hi');

console.log(hello) // this is returning a literal function object, not the code.

hello('Trevor')