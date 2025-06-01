/*
	input: vehicles array
	output: logging to the console the number of each type.

	data structures:
		create an object with the count of every key.
		Then take the entries of each and output those values.

	Algo:
		create an object.
		if the object has the key, add one
		if it doesn't have the key, set to one.

		pass the object into another function that logs things.
		iterate through the entries and log the first element and the second element in the subarr
*/

function countOccurrences(vehicles) {
	let count = {};

	vehicles.forEach(function(vehicle) {
		if(count.hasOwnProperty(vehicle)) {
			count[vehicle] += 1;
		} else {
			count[vehicle] = 1;
		}
	})
	
	displayVehicles(count);
}

function displayVehicles(count) {
	count = Object.entries(count);
	count.forEach(pair => console.log(`${pair[0]} => ${pair[1]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1