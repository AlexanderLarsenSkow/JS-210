let a = 20;

switch(a) {
	case 5:
	case 6:
	case 7:
		console.log('a is either 5, 6, or 7.')
		break;
	case 8:
	case 9:
		console.log('a is either 8 or 9.')
		break;
	default:
		console.log("I don't know what a is!")
		break;
}