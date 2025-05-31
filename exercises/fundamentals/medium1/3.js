// Multiplication Table

// does this produce the expected result?

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i <= 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// Yes, it does what it is supposed to do. The thing that seems like an issue is the lack of a 
	// break statement in the switch case expression. However, because the return keyword is used,
	// it never falls down to the next level and simply finsihes excution in the function.

// It never logs 10, it was supposed to also include 10.