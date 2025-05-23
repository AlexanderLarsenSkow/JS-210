let person1 = {
	name: 'Alex',
	age: 28,
	occupation: 'teacher'
};

let person2 = {name: 'Taylor', age: 24, occupation: 'student'};

console.log(person1.name, person1.age, person1.occupation); // dot notation
console.log(person2['name'], person2['age'], person2['occupation']); // bracket notation

// bracket notation must be used if a key is stored in a variable.

person1.height = '6ft'; // add a key / value pair with dot notation
person1['gender'] = 'Male'; // add a key / value pair with bracket notation

console.log(person1); // added height and gender keys with values

delete person1.gender; // deleted gender key / value pair
console.log(person1) // gender is gone. delete returns true unless it can't delete the property.