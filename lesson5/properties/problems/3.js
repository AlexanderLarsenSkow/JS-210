/*
copyProperties

	input: two objects
	copy all properties of first object to second
	return number of props copied
*/

function copyProperties(object1, object2) {
	let copyNum = 0;

	for (let key in object1) {
		object2[key] = object1[key];
		copyNum++;
	}

	return copyNum;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }