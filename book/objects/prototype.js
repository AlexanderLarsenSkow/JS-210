Array.prototype.push = function(newValue) {
	this[this.length] = newValue;
}

let array = [1, 2, 3];
array.push(4);

console.log(array.length) // 4
console.log(array) // [1, 2, 3, 4]

// Can define our own object methods, super interesting.

Array.prototype.forEach = function(callback) {
	for(let index = 0; index < this.length; index++) {
			callback(this[index]);
	}
}

let array2 = [1, 2, 3];
array2.forEach(function callback(value) {
	console.log(value);
}
)

