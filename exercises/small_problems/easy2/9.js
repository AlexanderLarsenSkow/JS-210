/*
Clean up the Words:

Problem:
	Replace all non-alphabetic characters with spaces.
*/

function cleanUp(garbageString) {
	let cleaner = garbageString.replaceAll(/[^a-zA-Z]/g, ' ');
	let noGarbage = '';

	for (let index = 0; index < cleaner.length; index++) {
		let char1 = cleaner[index];
		let char2 = cleaner[index + 1];

		if (char1 === char2 && char1 === ' ') continue;
		noGarbage += char1;
	}

	return noGarbage;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "