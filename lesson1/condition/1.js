let apples = 3;
let bananas = 5;

bananas = '3'; // reassign bananas to '3'

// == conditional

if (apples == bananas) {
	console.log('apples are bananas!') // data type is coereced to be equal.
}	else {
	console.log('The apples are not bananas today!')
}

// === conditional

if (apples === bananas) {
	console.log('apples are bananas!')
}	 else {
		if (apples == bananas) {
			console.log('The apples are sort of bananas!')
		} else {
			console.log('The apples are not bananas today!') // not equal
		}
}

bananas = 3;
apples = 3;

let areEqual = bananas === apples;
console.log(areEqual); // true

bananas = undefined;

let eitherOr = apples || bananas;
console.log(eitherOr) // 3

bananas = 1;
eitherOr = bananas || apples;
console.log(eitherOr) // 1

let lastName = 'Skow';
let familyMessage = lastName === 'Skow' ? "You're part of the family!" : "You're not family.";

console.log(familyMessage);
