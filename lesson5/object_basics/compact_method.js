let myObj = {
	foo: function (who) {
		console.log(`hello ${who}`);
	},

	bar: function (x, y) {
		return x + y;
	},
};

// can be transformed to this with the compact method syntax:

let myObj2 = {
	for(who) {
		console.log(`hello ${who}`);
	},

	bar(x, y) {
		return x + y;
	},
};

// Arrow functions bad for objects.