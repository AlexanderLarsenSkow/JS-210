let number = 4936;

let ones = number % 10;
number = (number - ones) / 10
console.log(ones)

let tens = number % 10;
console.log(tens)

number = (number - tens) / 10

let hundreds = number % 10;
console.log(hundreds)

number = (number - hundreds) / 10

let thousands = number % 10
console.log(thousands)


full_num = String(thousands) + String(hundreds) + String(tens) + String(ones)
console.log(Number(full_num))
