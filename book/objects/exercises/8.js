// Create a function that returns a copy of an object.
// 2 arguments: object to copy and array of keys to copy.
// no mutation.

/*
	Algo: take the entires of the object. Iterate over the arrays, add each key and value to the new obj.
*/

function copyObj(object, keys) {
	let copy = {};
	if(!keys) return Object.assign(copy, object);

	let entries = Object.entries(object)

	entries.forEach(function(entry){
		let key = entry[0]
		let value = entry[1]
		
		if (keys.includes(key)){
			copy[key] = value;
		}
	})
	return copy;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }