// use delete keyword to delete property from object.

let foo = {
	a: 'hello',
	b: 'world',
};

delete foo.a; // a deleted

console.log(foo); // {b: 'world'}