// This code has a function declared within the outer function, which can then be used elsewhere
// within the function block.

function circumference(radius) {
	function double(number) {
		return 2 * number;
	}

	return 3.14 * double(radius)
}
