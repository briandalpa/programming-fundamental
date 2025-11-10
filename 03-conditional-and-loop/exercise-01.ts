let num: number = 5;

// 1. Check odd/even number
if (num % 2 === 0) {
  console.log('Number is even');
} else {
  console.log('Number is odd');
}

// 2. Check prime number
let isPrime: boolean = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}

// 3. Find the sum of the numbers 1 to N
let n: number = 5;
let sum: number = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);

// 4. Find factorial of a number
let numForFactorial: number = 6;
let factorial: number = 1;

if (numForFactorial < 1) {
  console.log('Invalid number');
}

for (let i = 1; i <= numForFactorial; i++) {
  factorial *= i;
}
console.log(`Factorial of ${numForFactorial} is ${factorial}`);

// or using recursive function

/*
function factorialRecursive(value: number): number {
  if (value < 0) {
    console.log('Invalid input');
    return 0;
  } else if (value === 0 || value === 1) {
    return 1;
  } else {
    return (value *= factorialRecursive(value - 1));
  }
}

const result = factorialRecursive(6);
console.log(result);
*/

// 5. First N fibonacci numbers
let nFibonacci: number = 15;

let first: number = 0;
let second: number = 1;
let next: number;

if (nFibonacci === 0) {
  console.log(first);
} else if (nFibonacci === 1) {
  console.log(second);
} else {
  for (let i = 2; i <= nFibonacci; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  console.log(`The ${nFibonacci}th Fibonacci number is: ${second}`);
}
