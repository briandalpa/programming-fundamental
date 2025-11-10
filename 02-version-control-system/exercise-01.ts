// 1. Write a code to swap the case of each character from string

const str: string = 'The QuiCk BrOwN Fox';

// With loop

let result = '';
for (let i = 0; i < str.length; i++) {
  const char = str[i];
  result +=
    char === char?.toUpperCase() ? char?.toLowerCase() : char?.toUpperCase();
}

console.log(result);

// With function
/*
function swapCase(input: string): string {
  return [...str]
    .map((char: string) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

console.log(swapCase(str));
*/

// 2. Write a code to find the largest of two given integers

const num1: number = 42;
const num2: number = 27;

if (num1 > num2) {
  console.log(`The largest number is ${num1}`);
} else {
  console.log(`The largest number is ${num2}`);
}

// 3. Write a conditional statement to sort three numbers

const num3: number = 18;

let smallest: number;
let middle: number;
let largest: number;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
  if (num2 >= num3) {
    middle = num2;
    smallest = num3;
  } else {
    middle = num3;
    smallest = num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
  if (num1 >= num3) {
    middle = num1;
    smallest = num3;
  } else {
    middle = num3;
    smallest = num1;
  }
} else {
  largest = num3;
  if (num1 >= num2) {
    middle = num1;
    smallest = num2;
  } else {
    middle = num2;
    smallest = num1;
  }
}

console.log(`Sorted numbers: ${smallest} ${middle} ${largest}`);

// 4. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

let input: string = 'hello';

if (typeof input === 'string') {
  console.log('1');
} else if (typeof input === 'number') {
  console.log('2');
} else {
  console.log('3');
}

// 5. Write a code to change every letter a into * from a string of input

const inputStr: string = 'An apple a day keeps the doctor away';

let changedLetter = '';
for (let i = 0; i < inputStr.length; i++) {
  if (inputStr[i] === 'A' || inputStr[i] === 'a') {
    changedLetter += '*';
  } else {
    changedLetter += inputStr[i];
  }
}

console.log(changedLetter);
