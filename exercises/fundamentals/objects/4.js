/* Dynamic

What does the code log to the console?
*/

const myObject = {
  prop1: '123', // string keys
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456'; // variable
myObject['prop2'] = '456'; // changing value of key to '456'
myObject[prop2] = '678'; // creating new '456' key referencing '678'

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2); // '456'

/*
	When we use prop2 on line 14, we are creating a key with the referenced value of the prop2 variable
		which is the string '456,' now is also a key in the object that references '678', the value
		at the key. So, using `prop2` again in the brackets results in the output '678', and using
		`.prop2` results in calling the property (dot notation can't be used with a variable.), which
		outputs '456'
*/