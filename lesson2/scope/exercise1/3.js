let basket = 'empty';

function goShopping() {
	function shop1() { // reassigns
		basket = 'tv';
	}

	console.log(basket); // empty

	let shop2 = function() { // reassigns
		basket = 'computer';
	};

	const shop3 = () => {
		let basket = 'play station'; // new local variable
		console.log(basket);
	}

	shop1(); // reassigns basket to reference 'tv'
	shop2(); // basket reassigned again to 'computer'
	shop3(); // new local variable basket, shadowing, outputs 'play station'
	console.log(basket); // outputs 'computer'
}

goShopping();

// empty from console.log on line 7,
// 'play station'
// 'computer'