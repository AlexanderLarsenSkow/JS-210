// Create myObj with myProtoObj as the prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj);
console.log(myObj);