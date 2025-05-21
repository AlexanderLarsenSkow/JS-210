const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// Constants also shadow one another, so line 6 outputs the 'bar' string, referenced by teh constant
// Foo.