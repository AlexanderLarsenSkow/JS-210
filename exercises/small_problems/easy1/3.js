// How big is the room

/*
	User enters length and width of room in sq. meters.
	then logs the area of the room in sq meters and sq feet.
*/

const CONVERSION = 10.7639;

let lngth = parseInt(prompt('Enter the length of the room in meters:'));
console.log(lngth);

let width = parseInt(prompt('Enter the width of the room in meters:'));
console.log(width);

console.log(`The area of the room is ${lngth * width} meters (${lngth * width * CONVERSION} feet.)`)