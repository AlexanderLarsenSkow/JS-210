// log all odd numbers 1 to 99

for (let count = 1; count <= 99; count += 2) {
	console.log(count);
}

for (let count = 1; count <= 99; count++) {
	if (count % 2 === 0) continue;
	console.log(count);
}