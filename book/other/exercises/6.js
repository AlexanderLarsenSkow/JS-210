let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (words, regex) => words.filter(word => regex.test(word));

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']