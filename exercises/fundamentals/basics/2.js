const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = ''; // falsey value

if (myBoolean) {
  console.log('Hello'); // logs 'Hello' because myBoolean is truthy.
}

if (!myString) {
  console.log('World'); // does not log anything since !myString returns false.
}

if (!!myArray) {
  console.log('World'); // logs 'World' since !!myArray returns true. [] coerced into true boolean.
}

if (myOtherString || myArray) { 
  console.log('!'); // logs '!'. Even though myOtherString is falsey, the [] referenced by myArray
}	// is a truthy value. Empty arrays and objects are always truthy.