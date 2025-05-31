function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

/*
	This function has a limitation where trying to pass in an argument for discount or serviceCharge
		and using a default value for an earlier parameter (not passing an argument in) will result
		in JS thinking that the discount or later argument is one of the earlier arguments. Suddenly,
		the variables are not being evaluated in their proper place. This is the tension between
		default values and argument lists when declaring and calling functions.

	The other limitation is that 0 is a falsey value in JS and it will default that value when
		it's passed in, which isn't the ideal behavior.
*/

