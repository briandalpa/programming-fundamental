// 1. Write a code to display the multiplication table of a given integer.

const num: number = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 2. Write a code to check whether a string is a palindrome or not.

const str: string = 'madam';
const lowerCasedStr = str.toLowerCase();
let reversedStr: string = lowerCasedStr
  .split('')
  .reverse()
  .join('')
  .toLowerCase();

if (lowerCasedStr === reversedStr) {
  console.log(`'${str}' is a palindrome`);
} else {
  console.log(`'${str}' is not a palindrome`);
}

// 3. Write a code to convert centimeter to kilometer.

const numInCentimeter: number = 100000;
/*
const numInKilometer: number = numInCentimeter / 100000;
console.log(numInKilometers);
*/

function convertToKilometers(inputInCentimeter: number): number {
  const numInKilometer = inputInCentimeter / 100000;
  return numInKilometer;
}

const inKilometer = convertToKilometers(numInCentimeter);
console.log(`${numInCentimeter} cm in kilometer is ${inKilometer} km.`);

// 4. Write a code to format number as currency (IDR).

const numBeforeFormatted: number = 1000;

const formatted: string = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
}).format(numBeforeFormatted);

console.log(`Rp. ${formatted}`);

// 5. Write a code to remove the first occurrence of a given "search string" from a string.

const str2: string = 'Hello world';
const searchString: string = 'ell';

const result: string = str2.replace(searchString, '');
console.log(result);

// 6. Write a code to capitalize the first letter of each word in a string.

const str3: string = 'hello world';

const capitalized: string = str3
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(capitalized);
