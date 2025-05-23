function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
	Variables:
		bar, arg1, arg2, foo, qux, result

	Object Property Names:
		abc def ghi jkl mno pqr
		0, 1, 2, 3
		0 1 2

	Primitive Values:
		'Hello' 'Victor' 'Antonina'
		1 2 3 4 5 6
		null NaN

	Objects:
	bar function
	qux object
	abc array
	inner array in abc array
*/