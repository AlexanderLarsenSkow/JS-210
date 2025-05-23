let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// objKeys returns the keys only in the current object. so this snippet outputs qux

for (let key in myObj) {
	if (myObj.hasOwnProperty(key)) // this if statement allows us to iterate over only the current object's keys
  	console.log(key); 
}

// however, this code snippet outputs qux first, then foo, then bar, as it also iterates through
// the prototype's keys.