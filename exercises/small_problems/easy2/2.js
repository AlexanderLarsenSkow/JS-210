/*
Bannerizer

Problem:
	string input
	string with box output


+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

log +  
log |
log |  string  |
log |
log +

*/

function logInBox(string) {
	let length = string.length;
	
	const outer = '+' + '-'.repeat(length + 2) + '+';
	const innerBlock = '|' + (' ').repeat(length + 2) + '|';
	const main = '| ' + string + ' |';

	console.log(outer);
	console.log(innerBlock);
	console.log(main);
	console.log(innerBlock);
	console.log(outer);
}

logInBox('To boldly go where no one has gone before.');

logInBox('    ')